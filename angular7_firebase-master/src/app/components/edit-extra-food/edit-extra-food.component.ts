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
import { ExtraInterface } from '../../models/extra';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-edit-extra-food',
	templateUrl: './edit-extra-food.component.html',
	styleUrls: ['./edit-extra-food.component.css']
})
export class EditExtraFoodComponent implements OnInit {

	order_id: any;
	order_details: any;
	user_details: any;
	id: any;
	product_id: any;
	restaurant: any;
	item: any;

	private ExtraInterface: ExtraInterface[];

	constructor(
		private firebaseService: FirebaseService,
		private router: Router,
		private route: ActivatedRoute
	) { }


	name: any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock: any;
	image: any;

	ngOnInit() {

		this.id = this.route.snapshot.params['id'];
		this.product_id = this.route.snapshot.params['product_id'];


		this.firebaseService.getItemEditExtraDetail(this.id).snapshotChanges().subscribe(item => {
			this.order_details = [];
			//  restaurant.forEach(item => {

			console.log(item);


			let res = item.payload.toJSON();
			res['$key'] = item.key;
			//res['$key'] = this.id;
			console.log(item);

			this.order_details = res as ExtraInterface;
			//this.restaurant.push(res as RestaurantInterface);

			console.log(this.order_details);



			//	  });
		});




		console.log(this.order_details);

	}

	save() {

		let extraItem = {
			name: this.order_details.name,
			selected: this.order_details.selected,
			value: this.order_details.value,
		}

		this.firebaseService.updateChooseExtraItem(this.id, extraItem);

		this.router.navigate(['/produtos/adicional/listar/' + this.product_id]);

	}

}
