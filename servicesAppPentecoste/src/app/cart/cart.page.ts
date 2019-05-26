import { Component, OnInit } from '@angular/core';
import { Events, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Values } from '../../providers/values';
import { ServiceProvider } from '../../providers/service';
import * as firebase from 'firebase';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
//import { FormBuilder, ReactiveFormsModule ,Validators } from '@angular/forms';
import { Router } from '@angular/router';


const publishableKey = 'pk_test_sBkfyPHddnLGw7wljFrvZicW';
const stripe_secret_key = 'sk_test_mirrQ5hTnI8Ggpr6nsHiAY93';



@Component({
	selector: 'app-cart',
	templateUrl: './cart.page.html',
	styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

	public signupForm;
	zeroPrice: any;
	form: any;
	payment_method: any;
	cod: any;

	empty_cart: any;

	constructor(public events: Events,
		public service: ServiceProvider,
		public alertCtrl: AlertController,
		public values: Values, private payPal: PayPal,
		private stripe: Stripe,
		private router: Router) {
		this.form = {};
		this.empty_cart = "assets/imgs/empty-cart.png";

	}

	ngOnInit() {
	}

	addToCart(id) {
		for (const item in this.service.cart.line_items) {
			if (id === this.service.cart.line_items[item].product_id) {
				if (this.values.qty + 1 > this.service.cart.line_items[item].stock) {
					this.presentAlert('Ops!', 'Limite de Estoque excedido.');
					return;
				}
				this.service.cart.line_items[item].quantity += 1;
				this.service.proqty[id] += 1;
				this.service.total += parseFloat(this.service.cart.line_items[item].price);
				this.values.qty += 1;
			}
		}
	}

	deleteFromCart(id) {
		for (const item in this.service.cart.line_items) {
			if (id === this.service.cart.line_items[item].product_id) {
				this.service.cart.line_items[item].quantity -= 1;
				this.service.proqty[id] -= 1;
				this.values.qty -= 1;
				this.service.total -= parseFloat(this.service.cart.line_items[item].price);
				if (this.service.cart.line_items[item].quantity === 0) {
					for (let extras in this.service.cart.line_items[item].extra) {
						this.zeroPrice = this.service.cart.line_items[item].extra[extras].value * this.service.cart.line_items[item].extra[extras].quantity;
						this.service.total -= parseFloat(this.zeroPrice);
					}
					this.service.cart.line_items.splice(item, 1);
				}
			}
		}
	}

	deleteExtraFromCart(option) {
		for (let item in this.service.cart.line_items) {
			if (option.product_id == this.service.cart.line_items[item].product_id) {
				for (let extras in this.service.cart.line_items[item].extra) {
					if (option.id == this.service.cart.line_items[item].extra[extras].id) {
						this.service.cart.line_items[item].extra[extras].quantity -= 1;
						this.service.total -= parseFloat(this.service.cart.line_items[item].extra[extras].value);
						if (this.service.cart.line_items[item].extra[extras].quantity == 0) {
						}
					}
				}
			}
		}
	}

	addExtraToCart(option) {
		for (const item in this.service.cart.line_items) {
			if (option.product_id === this.service.cart.line_items[item].product_id) {
				for (const extras in this.service.cart.line_items[item].extra) {
					if (option.id === this.service.cart.line_items[item].extra[extras].id) {
						this.service.cart.line_items[item].extra[extras].quantity += 1;
						this.service.total += parseFloat(this.service.cart.line_items[item].extra[extras].value);
					}
				}
			}
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
	
	formatMoney(n) {
		return n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
	}

}
