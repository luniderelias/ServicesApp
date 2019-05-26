import { ItemInterface } from './../home/home.page';
import { Component, OnInit } from '@angular/core';
import { Events, ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ServiceProvider } from '../../providers/service';
import { Values } from '../../providers/values';

@Component({
	selector: 'app-products',
	templateUrl: './products.page.html',
	styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

	id: any;
	productsList: any;
	categoryList: any;
	params: any = {};
	items: any;
	restaurantName: any;
	owner_id: any;
	cat_id: any;

	loading = false;
	title: any;

	constructor(
		public values: Values,
		public loadingCtrl: LoadingController,
		private route: ActivatedRoute,
		public events: Events,
		public toastCtrl: ToastController,
		private storage: Storage,
		public socialSharing: SocialSharing,
		public service: ServiceProvider) {
			this.loading = true;
			this.route.params.subscribe(params => {

			this.id = params.id;
			this.title = params.title;
			this.owner_id = params.owner_id;
			this.cat_id = params.cat_id;

			this.service.getCategoryItems(this.cat_id).snapshotChanges().subscribe(snapshot => {
				this.productsList = [];

				snapshot.forEach(snap => {
					let a = snap.payload.toJSON();
					a['$key'] = snap.key;

					this.productsList.push(a as ItemInterface);
				});
				this.loading = false;
			});
		});
	}

	ngOnInit() {
	}

	formatMoney(n) {
		return n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
	}
}
