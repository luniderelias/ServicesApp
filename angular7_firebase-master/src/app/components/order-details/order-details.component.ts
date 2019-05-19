import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

import * as alertFunctions from './../shared/data/sweet-alerts';
import { RestaurantInterface } from '../../models/restaurant';
import { CategoryInterface } from '../../models/category';
import { OrderInterface } from '../../models/order';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-order-details',
	templateUrl: './order-details.component.html',
	styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

	loading: boolean;
	restaurants: any;
	restaurant2: any;

	id: any;

	restaurant: any;
	imageUrl: any;
	categories: any;
	button_text: string;
	paymentType = '';


	private RestaurantInterface: RestaurantInterface[];
	private CategoryInterface: CategoryInterface[];
	private OrderInterface: OrderInterface[];


	cat_id: any;
	category_details: any;

	order_id: any;
	order_details: any;
	user_details: any;
	itensPrice = 0;

	constructor(private firebaseService: FirebaseService, private authService: AuthService,
		private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {

		this.id = this.route.snapshot.params['id'];

		this.firebaseService.getOrderDetail(this.id).on('value', (snapshot) => {
			this.order_details = snapshot.val();


			this.order_details.items.forEach(item => {
				this.itensPrice += item.price * item.quantity;
			});

			switch (this.order_details.payments.PaymentType) {
				case 'card':
				this.paymentType = 'Cartão de Crédito';
				break;
				case 'debit':
				this.paymentType = 'Cartão de Débito';
				break;
				case 'cash':
				this.paymentType = 'À Vista';
				break;
			}

			if (this.order_details.status === 'Pendente') {
				this.onStatusOrderSubmit('Em Andamento');
			}
			switch (this.order_details.status) {
				case 'Em Andamento':
					this.button_text = 'Liberar Entrega';
					break;
				case 'Saiu para Entrega':
					this.button_text = 'Finalizar';
					break;
				case 'Finalizado':
				break;
			}
		});

	}

	showQuestion() {
		switch (this.order_details.status) {
			case 'Em Andamento':
				alertFunctions.showQuestion('', 'O Pedido saiu para Entrega?').then(res => {
					if (res.dismiss) { return; }
					this.onStatusOrderSubmit('Saiu para Entrega');
			  	});
				break;
			case 'Saiu para Entrega':
				alertFunctions.showQuestion('', 'O Pedido foi Recebido pelo Cliente?').then(res => {
					if (res.dismiss) { return; }
					this.onStatusOrderSubmit('Finalizado');
			  	});
				break;
		}
	}

	showCancelOrderQuestion() {
		alertFunctions.showQuestion('', 'Deseja Cancelar o Pedido?').then(res => {
			if (res.dismiss) { return; }
			this.onStatusOrderSubmit('Cancelado Pela Loja');
		  });
	}


	onStatusOrderSubmit(status) {
		this.loading = true;
		const order_details = {
			status: status,
			checked: ''
		}

		this.firebaseService.updateRestaurantOrderStatus(this.id, order_details).then(res => {
			this.loading = false;
			alertFunctions.showSuccess('Sucesso!', 'Status do Pedido Alterado');
		}, error => {
			this.loading = false;
			alertFunctions.showError('Erro!', 'Falha ao Alterar Status do Pedido');
		});

	}

}
