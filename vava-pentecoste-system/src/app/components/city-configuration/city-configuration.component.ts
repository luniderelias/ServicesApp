import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import * as alertFunctions from './../shared/data/sweet-alerts';

import { RestaurantInterface } from '../../models/restaurant';
import { CategoryInterface } from '../../models/category';
import { CityInterface } from '../../models/city';
import { OrderInterface } from '../../models/order';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-city-configuration',
	templateUrl: './city-configuration.component.html',
	styleUrls: ['./city-configuration.component.css']
})
export class CityConfigurationComponent implements OnInit {

	cities: any;
	userUid: any;
	restaurants: any;
	restaurant2: any;

	id: any;

	restaurant: any;
	imageUrl: any;
	categories: any;

	order_id: any;
	order_details: any;
	status: any;
	checked: any;

	isAdmin: boolean;

	private RestaurantInterface: RestaurantInterface[];
	private CategoryInterface: CategoryInterface[];
	private OrderInterface: OrderInterface[];
	private CityInterface: CityInterface[];

	loading = false;

	cat_id: any;
	category_details: any;

	user_details: any;

	constructor(private firebaseService: FirebaseService, private authService: AuthService,
		private router: Router, private route: ActivatedRoute) {
			this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
		}

	showQuestion(value) {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.deleteCity(value);
		});
	}

	ngOnInit() {

		this.firebaseService.getCities().snapshotChanges().subscribe(cities => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
			this.cities = [];

			cities.forEach(item => {
				let a = item.payload.toJSON();
				a['$key'] = item.key;
				this.cities.push(a as CityInterface);
			})
		});
	}

	deleteCity(citykey) {
		this.firebaseService.deleteCity(citykey).then(res => {
			alertFunctions.showSuccess('Sucesso!', 'Cidade Removida!');
			this.loading = false;
		}, error => {
			alertFunctions.showError('Erro!', 'Falha ao Remover Cidade!');
			this.loading = false;
		});
	}

}
