import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Events, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service';

import { Values } from '../../providers/values';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { FormControl } from '@angular/forms';
import { FcmService } from 'src/providers/fcm.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {

	public items: any = {};
	list_product: any;
	list_product_new: any;
	list_product_slide: any;
	start: any;
	id_user: any;
	favo_str: string = '';
	id_favo_str: any;
	list_cart: Array<any>;
	shops: any;
	userProfiles: any;
	currentUser: any;
	public chats: any = {};
	searching: any = false;
	searchControl: FormControl;
	loading = false;

	constructor(public events: Events,
		public toastCtrl: ToastController,
		private storage: Storage,
		public navCtrl: NavController,
		public service: ServiceProvider,
		public loadingCtrl: LoadingController,
		private callNumber: CallNumber,
		public values: Values,
		public router: Router,
		public platform: Platform
	) {
		this.loading = true;
		this.searchControl = new FormControl();
		this.items = [];
		this.events.subscribe('cart_list: change', (lst) => {
			this.list_cart = lst;
		});

		this.events.subscribe('user: change', (user) => {
			if (user || user != null) {
				this.id_user = user.uid;
			}
		});

		this.searchControl.valueChanges
		.pipe(debounceTime(500))
		.subscribe(search => {
			this.searching = false;
			this.setFilteredItems(search);
		});

	}

	onSearchInput() {
		this.searching = true;
	}

	setFilteredItems(searchTerm) {
		this.loading = true;
    	this.service.getFilterItems(searchTerm.toLowerCase()).snapshotChanges().subscribe(snapshot => {
			this.items = [];
			
				snapshot.forEach(snap => {
					 let a = snap.payload.toJSON();
					a['$key'] = snap.key;
	
					this.items.push(a as ItemInterface);
				});
				
			this.loading = false;
			});
  }

	addCart(item) {
		this.loading = true;
		const itemCv = {
			id: item.payload.doc.id,
			name: item.payload.doc.data().name,
			price: item.payload.doc.data().price,
			discount: item.payload.doc.data().discount,
			category: item.payload.doc.data().category,
			description: item.payload.doc.data().description,
			vote: item.payload.doc.data().vote,
			created: item.payload.doc.data().created,
			id_cat: item.payload.doc.data().id_cat,
			tag: item.payload.doc.data().tag,
			thumb: item.payload.doc.data().thumb,
			thumb1: item.payload.doc.data().thumb1,
			thumb2: item.payload.doc.data().thumb2,
			thumb3: item.payload.doc.data().thumb3,
			thumb4: item.payload.doc.data().thumb4,
			quantity: 1
		}

		const temp = this.list_cart.filter((element) => {
			if (element.id === itemCv.id) {
				element.quantity = 1 + element.quantity;
				return true;
			}
		})

		if (temp.length === 0) {
			this.list_cart = this.list_cart.concat(itemCv);
		}

		//this.presentToast();

		// this.list_cart = new Array();
		this.events.publish('cart_list: change', this.list_cart);
		this.storage.set('cart_list', this.list_cart);
		
		this.loading = false;
	}

	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'Adicionado com Sucesso!',
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}

	

	ionViewWillEnter() {
		this.loading = true;
		this.service.getAllChooseItems().snapshotChanges().subscribe(snapshot => {
			this.items = [];

				snapshot.forEach(snap => {
					 let a = snap.payload.toJSON();
					a['$key'] = snap.key;
					a['price'] = this.formatMoney(a['price']);
					this.items.push(a as ItemInterface);
				});
				
			this.loading = false;
			});

	}

	call(data) {
		this.callNumber.callNumber(data.phonenumber, true)
			.then(() => { })
			.catch(() => { });
	}

	chat(data) {
		this.currentUser = firebase.auth().currentUser;
		this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) => {
			this.userProfiles = snapshot.val();
		});

		if (this.userProfiles.photoURL) {
			this.service.addRoom(this.currentUser.uid, data, this.userProfiles.displayName, this.userProfiles.photoURL);
			this.values.userChatUserId = this.currentUser.uid;
			this.values.userChatData = data;
			this.router.navigateByUrl('chat');
		} else {
			this.service.addRoom(this.currentUser.uid, data, this.userProfiles.displayName, "assets/imgs/no-avt.png");
			this.values.userChatUserId = this.currentUser.uid;
			this.values.userChatData = data;
			this.router.navigateByUrl('chat');
		}

	}

	formatMoney(n) {
		if (n) {
		  const num = parseFloat(n);
		  return num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
		} else {
		  return;
		}
	}
}
export interface ItemInterface {
  $key?: string;
  available?: string;
  category?: string;
  description?: string;
  product_id?: string;
  image?: string;
  name?: string;
  price?: number;
  stock?: number;
  categories?: string;
  percent?: string;
  popularity?: number;
  image_firebase_url?: string;
  lenght?: string;
}