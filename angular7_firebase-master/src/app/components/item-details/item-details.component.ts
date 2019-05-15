import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user';
import { ViewChild, ElementRef, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import { RestaurantInterface } from '../../models/restaurant';
import { CategoryInterface } from '../../models/category';
import { ItemInterface } from '../../models/item';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-item-details',
	templateUrl: './item-details.component.html',
	styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

	restaurants: any;
	restaurant2: any;

	id: any;

	restaurant: any;
	imageUrl: any;
	categories: any;
	item: any;


	private RestaurantInterface: RestaurantInterface[];
	private CategoryInterface: CategoryInterface[];
	private ItemInterface: ItemInterface[];


	public isAdmin: any = null;
	public userUid: string = null;

	constructor(private firebaseService: FirebaseService, private authService: AuthService,
		private router: Router, private route: ActivatedRoute) {
		this.isAdmin = localStorage.getItem('current_user_role') === 'admin';
	}

	ngOnInit() {

		this.id = this.route.snapshot.params['id'];


		this.firebaseService.getItemDetails(this.id).snapshotChanges().subscribe(item => {
			this.item = [];
			//  restaurant.forEach(item => {

			//  console.log(item);


			let res = item.payload.toJSON();
			res['$key'] = item.key;

			console.log(item);

			this.item = res as ItemInterface;
			//this.restaurant.push(res as RestaurantInterface);

			console.log(this.item);



			//	  });
		});




	}

	onItemDelete() {

		this.firebaseService.deleteItem(this.id);

		this.router.navigate(['/items']);
	}

}
