import { Component, OnInit } from '@angular/core';
import { Events, ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ServiceProvider } from '../../providers/service';
import { Values } from '../../providers/values';

@Component({
	selector: 'app-wishlist',
	templateUrl: './wishlist.page.html',
	styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

	categoryList: any;
	bannerList: any;
	firebasedata: any;
	restaurants: any;
	public categoryId: any;
	params: any = {};
	selectedItem: any;
	icons: string[];
	items: any;
	loading = false;

	constructor(public loadingCtrl: LoadingController,
		private route: ActivatedRoute,
		public events: Events,
		public toastCtrl: ToastController,
		private storage: Storage,
		public socialSharing: SocialSharing,
		public service: ServiceProvider,
		public values: Values) {
		this.loading = true;
		this.categoryList = [];
		this.firebasedata = [];
		this.restaurants = [];

		this.service.getUserFavouriteList().on('value', snapshot => {
			this.categoryList = [];

			snapshot.forEach(snap => {
				this.categoryList.push({
					id: snap.key,
					title: snap.val().name,
					subtitle: snap.val().description,
					category: snap.val().category,
					image: snap.val().image,
					image_firebase_url: snap.val().image,
					restaurantId: snap.val().restaurantId,
					restaurantName: snap.val().restaurantName,
					delate: "Deletar",
					ionBadge: snap.val().price
				});
			});
			this.loading = false;
		});
	}

	removeFavItem(item) {
		this.service.removeFavItem(item);
	}

	ngOnInit() {
	}

}
