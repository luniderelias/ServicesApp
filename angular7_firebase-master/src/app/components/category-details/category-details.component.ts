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

import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-category-details',
	templateUrl: './category-details.component.html',
	styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

	restaurants: any;
	restaurant2: any;

	id: any;

	restaurant: any;
	imageUrl: any;
	categories: any;


	private RestaurantInterface: RestaurantInterface[];
	private CategoryInterface: CategoryInterface[];


	cat_id: any;
	category_details: any;

	constructor(private firebaseService: FirebaseService, private authService: AuthService,
		private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {

		this.id = this.route.snapshot.params['id'];



		this.firebaseService.getCategoryDetails(this.id).snapshotChanges().subscribe(category => {
			this.category_details = [];
			//  restaurant.forEach(item => {

			//  console.log(item);


			let res = category.payload.toJSON();

			if (category.key != null || category.key !== 'null') {
				res['$key'] = category.key;
			}

			console.log(category);

			this.category_details = res as CategoryInterface;
			//this.restaurant.push(res as RestaurantInterface);

			console.log(this.category_details);



			//	  });
		});




	}

	onCategoryDelete() {
		this.firebaseService.deleteCategory(this.id);

		this.router.navigate(['/categorias/listar']);

	}

}
