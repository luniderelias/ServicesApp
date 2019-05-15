import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import * as alertFunctions from './../shared/data/sweet-alerts';

@Component({
	selector: 'app-add-new-city',
	templateUrl: './add-new-city.component.html',
	styleUrls: ['./add-new-city.component.css']
})
export class AddNewCityComponent implements OnInit {
	loading: boolean;
	available: any;
	category: any;
	description: any;
	image: any;
	name: any;
	price: any;
	stock: any;
	categories: any;
	percent: any;
	sandbox: any;
	production: any;
	cityName: any;

	isAdmin: boolean;

	constructor(
		private firebaseService: FirebaseService,
		private router: Router

	) {
		this.isAdmin = localStorage.getItem('current_user_role') === 'admin' ||
			localStorage.getItem('current_user_role') === 'super_admin';
	}

	ngOnInit() {


	}

	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
				this.loading = true;
				this.addCityName();
		});
	}

	addCityName() {
		const cityName = {
			name: this.cityName
		}

		this.firebaseService.addNewCity(cityName).then(res => {
			alertFunctions.showSuccess('Sucesso!', 'Cidade Adicionada');
			this.loading = false;
			this.router.navigate(['enderecos/cidades/listar']);
		}, error => {
			alertFunctions.showError('Erro!', 'Falha ao Adicionar Cidade!');
			this.loading = false;
		});
	}

}
