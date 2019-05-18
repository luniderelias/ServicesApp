import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
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
		public values: Values, private payPal: PayPal,
		private stripe: Stripe,
		//	public formBuilder: FormBuilder,
		private router: Router

	) {

		this.form = {};

		this.empty_cart = "assets/imgs/empty-cart.png";


		for (var i = 0; i <= this.service.cart.line_items.length - 1; i++) {
			console.log(this.service.cart.line_items[i]);

		}
	}

	ngOnInit() {
	}


	addToCart(id) {

		for (let item in this.service.cart.line_items) {
			if (id == this.service.cart.line_items[item].product_id) {
				this.service.cart.line_items[item].quantity += 1;
				this.service.proqty[id] += 1;
				this.service.total += parseFloat(this.service.cart.line_items[item].price);
				this.values.qty += 1;
			}
		}
	}

	deleteFromCart(id) {
		for (let item in this.service.cart.line_items) {
			if (id == this.service.cart.line_items[item].product_id) {
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
		console.log(option);

		for (let item in this.service.cart.line_items) {
			console.log(item);
			if (option.product_id == this.service.cart.line_items[item].product_id) {
				for (let extras in this.service.cart.line_items[item].extra) {
					//this.service.cart.line_items[item].extra[extras].quantity -= 1;
					if (option.id == this.service.cart.line_items[item].extra[extras].id) {
						this.service.cart.line_items[item].extra[extras].quantity -= 1;

						this.service.total -= parseFloat(this.service.cart.line_items[item].extra[extras].value);

						if (this.service.cart.line_items[item].extra[extras].quantity == 0) {
							//this.service.cart.line_items[item].extra.splice(extras, 1);


						}
					}

				}
			}
		}
	}

	addExtraToCart(option) {
		console.log(option);

		for (let item in this.service.cart.line_items) {
			console.log(item);
			if (option.product_id == this.service.cart.line_items[item].product_id) {
				for (let extras in this.service.cart.line_items[item].extra) {
					//this.service.cart.line_items[item].extra[extras].quantity -= 1;
					if (option.id == this.service.cart.line_items[item].extra[extras].id) {
						this.service.cart.line_items[item].extra[extras].quantity += 1;

						this.service.total += parseFloat(this.service.cart.line_items[item].extra[extras].value);


					}

				}
			}
		}
	}

	radioChecked(val) {
		this.cod = val;
		//console.log(val);

		console.log(this.cod);
	}

}
