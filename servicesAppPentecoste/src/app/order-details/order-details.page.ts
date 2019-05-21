import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Values } from '../../providers/values';
import { ServiceProvider } from '../../providers/service';
import * as firebase from 'firebase';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-order-details',
	templateUrl: './order-details.page.html',
	styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

	currentUser: any;
	myOrderList: any;
	id: any;
	loading = false;

	orderDetails: any;
	addresses: any;
	paymentType: any;

	constructor(public events: Events, public service: ServiceProvider,
		public values: Values, private payPal: PayPal, private stripe: Stripe,
		private router: Router, private route: ActivatedRoute) {
		this.loading = true;
		this.route.params.subscribe(params => {
			console.log(params);
			this.id = params.id;

			this.service.getOrderDetail(this.id).on('value', (snapshot) => {
				this.orderDetails = snapshot.val();
				this.addresses = snapshot.val().addresses;
				this.loading = false;
				switch (this.orderDetails.payments.PaymentType) {
					case 'cash':
						this.paymentType = 'Dinheiro';
						break;
					case 'credit':
						this.paymentType = 'Cartão de Crédito';
						break;
					case 'debit':
						this.paymentType = 'Cartão de Débito';
						break;
				}
			});

		});
	}

	ngOnInit() {
	}

}
