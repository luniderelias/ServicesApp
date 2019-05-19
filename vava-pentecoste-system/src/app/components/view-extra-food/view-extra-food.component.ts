import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import * as alertFunctions from './../shared/data/sweet-alerts';

import { ExtraInterface } from '../../models/extra';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-view-extra-food',
	templateUrl: './view-extra-food.component.html',
	styleUrls: ['./view-extra-food.component.css']
})
export class ViewExtraFoodComponent implements OnInit {

	loading: boolean;
	order_id: any;
	order_details: any;
	user_details: any;

	item: any;

	id: any;

	isAdmin: boolean;



	private ExtraInterface: ExtraInterface[];


	constructor(private firebaseService: FirebaseService, private authService: AuthService,
		private router: Router, private route: ActivatedRoute) {
			this.isAdmin = localStorage.getItem('current_user_role') === 'admin' || localStorage.getItem('current_user_role') === 'super_admin';
		}

		showQuestion(value) {
			alertFunctions.showQuestion('', 'Deseja Confirmar essa Ação?').then(res => {
				if (res.dismiss) { return; }
				this.loading = true;
				this.onExtraItemDelete(value);
			});
		}

	ngOnInit() {

		this.id = this.route.snapshot.params['id'];

		console.log(this.id);

		this.firebaseService.getItemExtraDetail(this.id).snapshotChanges().subscribe(restaurant => {
			this.order_details = [];
			restaurant.forEach(item => {

				//  console.log(item);


				console.log(item);

				let res = item.payload.toJSON();
				res['$key'] = item.key;
				console.log(res);

				//		console.log(item);

				//this.order_details = res as ExtraInterface;
				this.order_details.push(res as ExtraInterface);

				console.log(this.order_details);



			});
		});




	}


	onExtraItemDelete(id) {
		this.firebaseService.onExtraItemDelete(this.id, id).then(res => {
			alertFunctions.showSuccess('Sucesso!', 'Adicional Removido');
			this.loading = false;
		}, error => {
			alertFunctions.showError('Erro!', 'Falha ao Remover Adicional');
			this.loading = false;
		});
	}

	onExtraItemEdit(id) {

		this.firebaseService.setProductId(this.id);

		this.router.navigate(['/produtos/adicional/editar/' + id + '/' + this.id]);
	}

}
