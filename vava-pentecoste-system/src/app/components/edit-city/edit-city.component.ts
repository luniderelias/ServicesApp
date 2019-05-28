import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import * as alertFunctions from './../shared/data/sweet-alerts';
import { CityInterface } from '../../models/city';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edit-city',
	templateUrl: './edit-city.component.html',
	styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

	loading: boolean;
	id: any;
	name: any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock: any;
	image: any;
	cityName: any;
	fare: any;
	restaurant: any;
	isAdmin: boolean;

	constructor(private dataApi: DataApiService,
		private firebaseService: FirebaseService,
		private router: Router, private route: ActivatedRoute,
		private authService: AuthService) {


			this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';

	}

	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.onCityEditSubmit();
		});
	}

	ngOnInit() {


		this.id = this.route.snapshot.params['id'];



		this.firebaseService.getCityDetails(this.id).snapshotChanges().subscribe(restaurant => {
			this.restaurant = [];

			const res = restaurant.payload.toJSON();
			res['$key'] = restaurant.key;

			this.restaurant = res as CityInterface;

			this.cityName = this.restaurant.name;
			this.fare = this.restaurant.fare;

		});

	}

	onCityEditSubmit() {
		const city = {
			name: this.cityName,
			fare: this.fare
		}

		this.firebaseService.updateCity(this.id, city).then(res => {
			alertFunctions.showSuccess('Sucesso!', 'Cidade Salva');
			this.loading = false;
			this.router.navigate(['enderecos/cidades/listar']);
		}, error => {
			alertFunctions.showError('Erro!', 'Falha ao Salvar Cidade!');
			this.loading = false;
		});

	}

}
