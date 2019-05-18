import { Component, OnInit } from '@angular/core';
import { Events, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Values } from '../../providers/values';
import { ServiceProvider } from '../../providers/service';
import * as firebase from 'firebase';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';




@Component({
	selector: 'app-choose-payment',
	templateUrl: './choose-payment.page.html',
	styleUrls: ['./choose-payment.page.scss'],
})
export class ChoosePaymentPage implements OnInit {

	public signupForm;
	zeroPrice: any;
	form: any;
	payment_method: any;
	cod: any;

	payment_method_image: any;

	constructor(public events: Events,
		public service: ServiceProvider,
		public values: Values, private payPal: PayPal,
		private stripe: Stripe,
		private router: Router,
		public alertCtrl: AlertController,
		private route: ActivatedRoute) {
		this.payment_method_image = "assets/imgs/payment.png";
	}

	ngOnInit() {
	}

	savePaymentMethod() {
		if (this.cod === '' || this.cod === undefined || this.cod === null) {
			this.presentAlert('', 'Por favor, selecione um método de pagamento');
		} else {
			this.router.navigate(['/choose-address', {cod: this.cod}]);
		}
	}

	radioChecked(val) {
		this.cod = val;
	}

	async presentAlert(title, msg) {
		const alert = await this.alertCtrl.create({
			header: title,
			message: msg,
			buttons: ['OK']
		});
		await alert.present();
	}

}
