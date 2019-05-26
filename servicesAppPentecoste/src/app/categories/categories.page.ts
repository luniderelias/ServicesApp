import { Component, OnInit } from '@angular/core';
import { Events, ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ServiceProvider } from '../../providers/service';
import { Values } from '../../providers/values';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.page.html',
	styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

	id: any;
	productsList: any;
	categoryList: any;
	params: any = {};
	items: any;
	title: any;
	owner_id: any;

	loading = false;

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

			this.service.getRestaurantCategoryLists('-LewaVfmdY4bXgzF_SAD').on('value', snapshot => {

				this.categoryList = [];

				snapshot.forEach(snap => {
					this.categoryList.push({
						id: snap.key,
						category: snap.val().cat_id,
						title: snap.val().cat_name,
						subtitle: snap.val().cat_name,
						ionBadge: snap.val().cat_name,
						image: snap.val().firebase_url
					});
				});
				this.loading = false;
			});
		});
	}

	ngOnInit() {
	}
}
