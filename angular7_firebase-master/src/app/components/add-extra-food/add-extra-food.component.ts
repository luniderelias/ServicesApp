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
import { CityInterface } from '../../models/city';
import { OrderInterface } from '../../models/order';
import { DistrictInterface } from '../../models/district';
import { BuildingInterface } from '../../models/building';
import { StreetInterface } from '../../models/street';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-add-extra-food',
	templateUrl: './add-extra-food.component.html',
	styleUrls: ['./add-extra-food.component.css']
})
export class AddExtraFoodComponent implements OnInit {

	id: any;
	available: any;
	category: any;
	description: any;
	image: any;
	name: any;
	price: any;
	stock: any;
	categories: any;
	percent: any;

	extraName: any;
	extraSelected = '';
	extraPrice: any;

	item: any;
	isAdmin: boolean;
	private RestaurantInterface: RestaurantInterface[];
	private CategoryInterface: CategoryInterface[];
	private ItemInterface: ItemInterface[];

	constructor(private dataApi: DataApiService,
		private firebaseService: FirebaseService,
		private router: Router, private route: ActivatedRoute,
		private authService: AuthService) {

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


	onExtraItemAddSubmit() {

		let extraItem = {
			name: this.extraName,
			selected: this.extraSelected,
			price: this.extraPrice,

		}

		console.log(extraItem);

		this.firebaseService.addExtraItem(this.id, extraItem);

		this.router.navigate(['/produtos/adicional/listar/' + this.id]);

	}

}
