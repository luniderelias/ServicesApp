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
import { CityInterface } from '../../models/city';
import { OrderInterface } from '../../models/order';
import { DistrictInterface } from '../../models/district';
import { BuildingInterface } from '../../models/building';
import { StreetInterface } from '../../models/street';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-edit-city',
	templateUrl: './edit-city.component.html',
	styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

	id: any;
	name: any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock: any;
	image: any;
	cityName: any;
	restaurant: any;
	isAdmin: boolean;

	constructor(private dataApi: DataApiService,
		private firebaseService: FirebaseService,
		private router: Router, private route: ActivatedRoute,
		private authService: AuthService) {


		this.isAdmin = localStorage.getItem('current_user_role') === 'admin';

	}

	ngOnInit() {

		console.log("Here is Edit Restaurant Page");


		this.id = this.route.snapshot.params['id'];



		this.firebaseService.getCityDetails(this.id).snapshotChanges().subscribe(restaurant => {
			this.restaurant = [];
			//  restaurant.forEach(item => {

			//  console.log(item);




			let res = restaurant.payload.toJSON();
			res['$key'] = restaurant.key;

			//console.log(restaurant);

			this.restaurant = res as CityInterface;
			//this.restaurant.push(res as RestaurantInterface);

			console.log(this.restaurant);

			this.cityName = this.restaurant.name;



			console.log(this.id);

			console.log(this.cityName);



			//	  });
		});

	}

	onCityEditSubmit() {

		let city = {
			name: this.cityName,

		}

		this.firebaseService.updateCity(this.id, city);

		this.router.navigate(['/enderecos/cidades/listar']);

	}

}
