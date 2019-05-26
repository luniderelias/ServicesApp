import { Component, OnInit } from '@angular/core';
import { Events, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Values } from '../../providers/values';
import { ServiceProvider } from '../../providers/service';
import * as firebase from 'firebase';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.page.html',
	styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

	currentUser: any;
	myOrderList: any = {};
	id: any;

	params: any = {};

	loading = false;

	tests: any;

	constructor(
		private storage: Storage, public events: Events, public service: ServiceProvider,
		public values: Values, private payPal: PayPal, private stripe: Stripe,
		private router: Router, private route: ActivatedRoute, public loadingCtrl: LoadingController) {
			this.loading = true;
			this.myOrderList = [];
			this.tests = "name";
			this.getOrders();

	}

	ngOnInit() {
	}

	ionViewWillEnter() {
	}

	getOrders() {
		this.service.getMyOrderList().snapshotChanges().subscribe(snapshot => {
			this.myOrderList = [];
			snapshot.forEach(snap => {
					 let a = snap.payload.val();
					a['$key'] = snap.key;
					a['total'] = this.formatMoney(a['total']);
					this.myOrderList.push(a as OrderInterface);
				});
			this.myOrderList = this.myOrderList.reverse();
			this.loading = false;
			});
	  }
	  
	  
	formatMoney(n) {
		return n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
	}

}

export interface OrderInterface {

	$key?:string;
	addresses?:any;
	customerDetails?: any;
	items?: any;
	payments: any;
	address_id?:string;
	created?:string;
	item_qty?:string;
	order_date_time?:string;
	payment_id?:string;
	product_firebase?:string;
	product_id?:string;
	product_image?:string;
	product_price?:string;
	product_total_price?:string;
	restaurant_id?:string;
	restaurant_name?:string;
	status?:string;
	user_id?:string;
	user_name?:string;
	restaurant_owner_id?:string;
	checked?:string;
  }