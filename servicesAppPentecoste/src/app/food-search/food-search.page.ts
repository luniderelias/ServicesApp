import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Events, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service';

import { Values } from '../../providers/values';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as firebase from 'firebase';


declare var google;
declare var map;
declare var infoWindow;

@Component({
	selector: 'app-food-search',
	templateUrl: './food-search.page.html',
	styleUrls: ['./food-search.page.scss'],
})
export class FoodSearchPage implements OnInit {

	map: any;
	image: any;
	dataInfo: any;
	userList: any;
	distanceRestaurant: any;

	movieDetailPage = 'MovieDetailPage';
	informationDetailPage = 'InformationDetailPage';

	offset: number = 0;

	public layouticon: any;
	public layout: any;

	currentUser: any;
	myOrderList: any;
	id: any;

	params: any = {};


	searchedItem: any;
	public items: any;

	public chats: any = {};

	public nearestHotels: any = {};

	public featuredHotels: any = {};

	constructor(
		public events: Events,
		public toastCtrl: ToastController,
		private storage: Storage,
		public navCtrl: NavController,
		public service: ServiceProvider,
		public loadingCtrl: LoadingController,
		private callNumber: CallNumber,
		public values: Values,
		public router: Router,
		public geo: Geolocation,
		public platform: Platform) {
		let that = this;
		let map: any;
		let infoWindow: any;
		let beachMarker: any;
		let image: any;

		let options = {
			frequency: 3000,
			enableHighAccuracy: true
		};
		this.geo.getCurrentPosition(options).then(resp => {
			var uids = firebase.auth().currentUser.uid;

			firebase.database().ref('/users').child(uids).update({
				lat: resp.coords.latitude,
				lng: resp.coords.longitude,
			});

		}).catch(() => {
		});
		that.platform.ready().then(() => {
			var options = {
				timeout: 5000
			};

		});

	}

	ionViewWillEnter() {
		var markers = [];
		var distance = [];
		this.chats = [];

		this.service.getAllChooseItems().on('value', snapshot => {

			var key = snapshot.key;

			var val = snapshot.val();


			this.chats = [];

			snapshot.forEach(snap => {

				distance.push(calcDistance(snap.val().restaurant_lat, snap.val().restaurant_long, snap.key, snap) + " kilometers away");


				var userLists: any;

				this.chats.push({
					id: snap.key,
					image_firebase_url: snap.val().image_firebase_url,
					name: snap.val().name,
					price: snap.val().price,
					restaurant_image: snap.val().restaurant_image,
					restaurant_lat: snap.val().restaurant_lat,
					restaurant_long: snap.val().restaurant_long,
					restaurant_name: snap.val().restaurant_name,
					res_id: snap.val().res_id,
					owner_id: snap.val().user_id,
				});
			});

			this.chats = this.chats.reverse();

		});

		this.nearestHotels = [];

		this.nearestHotels = [];
		this.service.getNearestRestaurantItems().on('value', snapshot => {
			var key = snapshot.key;
			var val = snapshot.val();
			this.nearestHotels = [];
			snapshot.forEach(snap => {
				var t = snap.val().item_dis;
				var tArr = snap.val().item_dis.split("z");
				var hour = tArr[0];
				var minute = tArr[1];

				this.nearestHotels.push({

					id: snap.key,
					image_firebase_url: snap.val().image_firebase_url,
					name: snap.val().name,
					price: snap.val().price,
					restaurant_image: snap.val().restaurant_image,
					restaurant_lat: snap.val().restaurant_lat,
					restaurant_long: snap.val().restaurant_long,
					restaurant_name: snap.val().restaurant_name,
					owner_id: snap.val().owner_id,
					res_id: snap.val().res_id,
					item_dis: minute,
				});
			});
		});
		function calcDistance(destination, destination1, res_id, snap) {
			var userLists: any;
			firebase.auth().onAuthStateChanged(function (user) {
				if (user) {
					var uid = user.uid;
					firebase.database().ref('/users').child(uid).on('value', snapshot => {

						var cord = snapshot.val();
						var p1 = new google.maps.LatLng(destination, destination1);
						var p2 = new google.maps.LatLng(cord.lat, cord.lng);

						var distanceBetween = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)) / 1000;

						if (distanceBetween < 10) {
							firebase.database().ref('/cordItems').child(uid).child(res_id).update({
								id: snap.key,
								image_firebase_url: snap.val().image_firebase_url,
								name: snap.val().name,
								price: snap.val().price,
								restaurant_image: snap.val().restaurant_image,
								restaurant_lat: snap.val().restaurant_lat,
								restaurant_long: snap.val().restaurant_long,
								restaurant_name: snap.val().restaurant_name,
								res_id: snap.val().res_id,
								owner_id: snap.val().user_id,
								item_dis: "az" + distanceBetween.toFixed(2)
							});
						}
						else if (distanceBetween >= 10 && distanceBetween < 100) {
							firebase.database().ref('/cordItems').child(uid).child(res_id).update({
								id: snap.key,
								image_firebase_url: snap.val().image_firebase_url,
								name: snap.val().name,
								price: snap.val().price,
								restaurant_image: snap.val().restaurant_image,
								restaurant_lat: snap.val().restaurant_lat,
								restaurant_long: snap.val().restaurant_long,
								restaurant_name: snap.val().restaurant_name,
								res_id: snap.val().res_id,
								owner_id: snap.val().user_id,
								item_dis: "bz" + distanceBetween.toFixed(2)
							});
						}
						else if (distanceBetween >= 100 && distanceBetween < 1000) {
							firebase.database().ref('/cordItems').child(uid).child(res_id).update({
								id: snap.key,
								image_firebase_url: snap.val().image_firebase_url,
								name: snap.val().name,
								price: snap.val().price,
								restaurant_image: snap.val().restaurant_image,
								restaurant_lat: snap.val().restaurant_lat,
								restaurant_long: snap.val().restaurant_long,
								restaurant_name: snap.val().restaurant_name,
								res_id: snap.val().res_id,
								owner_id: snap.val().user_id,
								item_dis: "cz" + distanceBetween.toFixed(2)
							});
						}

						else if (distanceBetween >= 1000 && distanceBetween < 10000) {
							firebase.database().ref('/cordItems').child(uid).child(res_id).update({
								id: snap.key,
								image_firebase_url: snap.val().image_firebase_url,
								name: snap.val().name,
								price: snap.val().price,
								restaurant_image: snap.val().restaurant_image,
								restaurant_lat: snap.val().restaurant_lat,
								restaurant_long: snap.val().restaurant_long,
								restaurant_name: snap.val().restaurant_name,
								res_id: snap.val().res_id,
								owner_id: snap.val().user_id,
								item_dis: "dz" + distanceBetween.toFixed(2)
							});
						}
						else if (distanceBetween >= 10000 && distanceBetween < 100000) {
							firebase.database().ref('/cordItems').child(uid).child(res_id).update({
								id: snap.key,
								image_firebase_url: snap.val().image_firebase_url,
								name: snap.val().name,
								price: snap.val().price,
								restaurant_image: snap.val().restaurant_image,
								restaurant_lat: snap.val().restaurant_lat,
								restaurant_long: snap.val().restaurant_long,
								restaurant_name: snap.val().restaurant_name,
								res_id: snap.val().res_id,
								owner_id: snap.val().user_id,
								item_dis: "fz" + distanceBetween.toFixed(2)
							});
						}
						return distanceBetween;
					});


				}
			});


		}

	}

	ngOnInit() {
	}

}
