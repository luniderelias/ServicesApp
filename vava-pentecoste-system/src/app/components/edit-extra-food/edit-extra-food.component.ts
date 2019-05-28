import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import { ExtraInterface } from '../../models/extra';
import * as alertFunctions from './../shared/data/sweet-alerts';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edit-extra-food',
	templateUrl: './edit-extra-food.component.html',
	styleUrls: ['./edit-extra-food.component.css']
})
export class EditExtraFoodComponent implements OnInit {

	loading: boolean;
	order_id: any;
	order_details: any;
	user_details: any;
	id: any;
	product_id: any;
	restaurant: any;
	item: any;

	isAdmin: boolean;
	private ExtraInterface: ExtraInterface[];

	constructor(
		private firebaseService: FirebaseService,
		private router: Router,
		private route: ActivatedRoute
	) {

		this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
	}


	name: any;
	category: any;
	description: any;
	available: any;
	price: any;
	stock: any;
	image: any;

	showQuestion() {
		alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
			if (res.dismiss) { return; }
			this.loading = true;
			this.save();
		});
	}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.product_id = this.route.snapshot.params['product_id'];

		this.firebaseService.getItemEditExtraDetail(this.id).snapshotChanges().subscribe(item => {
			this.order_details = [];
			let res = item.payload.toJSON();
			res['$key'] = item.key;
			this.order_details = res as ExtraInterface;
		});
	}

	save() {
		const extraItem = {
			name: this.order_details.name,
			selected: this.order_details.selected,
			value: this.order_details.value,
		}

		this.firebaseService.updateChooseExtraItem(this.id, extraItem).then(res => {
			alertFunctions.showSuccess('Sucesso!', 'Adicional Salvo');
			this.loading = false;
			this.router.navigate(['/produtos/adicional/listar/' + this.product_id]);
		}, error => {
			alertFunctions.showError('Erro!', 'Falha ao Salvar Adicional');
			this.loading = false;
		});

	}

}
