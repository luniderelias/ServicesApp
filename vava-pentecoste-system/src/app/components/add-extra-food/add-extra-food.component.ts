import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import * as alertFunctions from './../shared/data/sweet-alerts';
import { RestaurantInterface } from '../../models/restaurant';
import { CategoryInterface } from '../../models/category';
import { ItemInterface } from '../../models/item';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-add-extra-food',
	templateUrl: './add-extra-food.component.html',
	styleUrls: ['./add-extra-food.component.css']
})
export class AddExtraFoodComponent implements OnInit {

	id: any;
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

			this.isAdmin = localStorage.getItem('current_user_role') === 'admin' ||
			localStorage.getItem('current_user_role') === 'super_admin';


	}
	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.onExtraItemAddSubmit();
		});
	}

	ngOnInit() {

		this.id = this.route.snapshot.params['id'];


		this.firebaseService.getItemDetails(this.id).snapshotChanges().subscribe(item => {
			this.item = [];
			let res = item.payload.toJSON();
			res['$key'] = item.key;
			this.item = res as ItemInterface;
		});
	}


	onExtraItemAddSubmit() {

		const extraItem = {
			name: this.extraName,
			selected: this.extraSelected,
			price: this.extraPrice,

		}
		this.firebaseService.addExtraItem(this.id, extraItem).then(res => {
			alertFunctions.showSuccess('Sucesso!', 'Produto Extra Salvo');
			this.loading = false;
			this.router.navigate(['/produtos/adicional/listar/' + this.id]);
		}, error => {
			alertFunctions.showError('Erro!', 'Falha ao Adicionar Produto Extra!');
			this.loading = false;
		});


	}

}
