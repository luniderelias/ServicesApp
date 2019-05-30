import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs-compat/Observable';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireDatabase } from '@angular/fire/database';


import 'rxjs/add/operator/map';
import { map } from 'rxjs/Operator/map';
import { URLSearchParams } from '@angular/http';





@Injectable()
export class ServiceProvider {


	product_id: Array<number> = [];
	url: any;
	cart: any;
	params: any;
	orderLists: any;
	public ref: any;
	productsList: any;
	customerList: any;
	public orderList: any;


	total: number = 0;
	proqty: Array<number> = [];
	getSecKey: any;
	users: any;


	public fireAuth: any;
	public restaurantUserInfo: any;
	public restaurants: any;
	public restaurantCategory: any;
	public category: any;
	public restaurantItems: any;
	public items: any;
	public currentUser: any;
	public userAddressList: any;

	public cityName: any;
	public cityDistrictName: any;
	public streetName: any;
	public apartmentOfficeName: any;
	public categorizedOrders: any;
	public favoriteItem: any;
	public favoriteItemList: any;
	public chats: any;
	public userChatList: any;
	public allChoosenItems: any;
	public filterItems: any;

	public hotelCords: any;

	constructor(private af: AngularFireDatabase, public afs: AngularFirestore, public facebook: Facebook, public alertCtrl: AlertController) {
		this.cart = {
			'line_items': [],
			'extraOptions': []
		};
		this.currentUser = firebase.auth().currentUser;

		this.fireAuth = firebase.auth();

		this.restaurantUserInfo = firebase.database().ref('/users');

		this.restaurants = firebase.database().ref('/restaurants');

		this.restaurantCategory = firebase.database().ref('/category');

		this.items = firebase.database().ref('/items');

		this.cityName = firebase.database().ref('/city');

		this.cityDistrictName = firebase.database().ref('/districts');

		this.streetName = firebase.database().ref('/streets');

		this.apartmentOfficeName = firebase.database().ref('/apartments');

		this.orderList = firebase.database().ref('/orders');

		this.categorizedOrders = firebase.database().ref('/categorizedOrders');

		this.chats = firebase.database().ref('/chats');

		this.allChoosenItems = firebase.database().ref('/items');

		this.filterItems = firebase.database().ref('/items');

		this.hotelCords = firebase.database().ref('/cordItems');

	}


	getRestaurantUserProfile(id): any {
		return this.restaurantUserInfo.child(id);
	}

	getRestaurantsList(): any {
		return this.restaurants;
	}

	getRestaurantCategoryLists(id) {
		this.category = this.restaurantCategory.orderByChild('res_name').equalTo(id);
		return this.category;
	}

	getItemLists(id) {
		this.restaurantItems = this.items.orderByChild('categories').equalTo(id);
		return this.restaurantItems;

	}

	getItemDetail(id): any {
		return this.items.child(id);
	}

	getItemExtraOptionsDetail(id) {

		return this.items.child(id).child('extraOptions');

	}

	getCurrentUserAddresses(uid) {

		this.userAddressList = this.restaurantUserInfo.child(uid).child('addresses');

		return this.userAddressList;
	}

	getCityName() {
		return this.cityName;
	}

	getCityDistrictName() {
		return this.cityDistrictName;
	}

	getStreetName() {
		return this.streetName;
	}

	getApartmentOfficeName() {

		return this.apartmentOfficeName;
	}

	saveNewAddress(city, district, street, number, displayName, email, phone, complement, uid) {
		return this.restaurantUserInfo.child(uid).child('addresses').push({
			city: city.name,
			fare: city.fare,
			district: district,
			street: street,
			number: number,
			displayName: displayName,
			email: email,
			phone: phone,
			complement: complement,
			uid: uid,
			timeStamp: firebase.database.ServerValue.TIMESTAMP,
			reverseOrder: 0 - Date.now()
		});
	}

	addOrders(order: string, total: number, uid: string, payments: string, userProfiles: string, currentUserAddress: any) {
		return this.orderList.push({
			uid: uid,
			items: order,
			total: total,
			payments: payments,
			customerDetails: userProfiles,
			addresses: currentUserAddress,
			status: 'Pendente',
			timeStamp: firebase.database.ServerValue.TIMESTAMP,
			reverseOrder: 0 - Date.now()
		});
	}

	getUserProfile(id): any {
		return this.restaurantUserInfo.child(id);
	}

	addIdToOrder(newOrderKey) {
		return this.orderList.child(newOrderKey).child('id').set(newOrderKey);
	}

	addNewOrdersToEachRestaurantExtra(orderKey, restaurantId, newOrderDetails) {
		return this.categorizedOrders.child(restaurantId).child(orderKey).set({
			addresses: newOrderDetails.addresses,
			customerDetails: newOrderDetails.customerDetails,
			email: newOrderDetails.id,
			items: newOrderDetails.items,
			payments: newOrderDetails.payments,
			status: newOrderDetails.status,
			timeStamp: newOrderDetails.timeStamp,
			total: newOrderDetails.total,
			restaurant_owner_id: restaurantId
		});

	}

	categorizedRestaurantOrder(orderKey, restaurantKey) {

		return this.categorizedOrders.child(restaurantKey).child(orderKey).update({
			id: orderKey
		});

	}

	getOrderDetail(id) {
		return this.orderList.child(id);
	}


	getMyOrderList() {
		return this.af.list('/orders', (ref) => {
			return ref.orderByChild('uid').equalTo(firebase.auth().currentUser.uid);
		});
	}


	getFavoriteItem(id): any {
		this.favoriteItem = this.restaurantUserInfo.child(firebase.auth().currentUser.uid).child('favorites').child(id);
		return this.favoriteItem;
	}

	addToFavorite(data, id) {

		var uid = firebase.auth().currentUser.uid;

		this.restaurantUserInfo.child(uid).child('favorites').child(id).set({
			product_id: id,
			image: data.image_firebase_url,
			name: data.name,
			price: data.price,
			categories: data.categories,
			available: data.available,
			category: data.category,
			description: data.description,
			stock: data.stock,
			restaurantId: data.restaurantId,
			restaurantName: data.restaurantName,
			market: true
		});
	}

	removeFavourite(id) {
		var uid = firebase.auth().currentUser.uid;

		this.restaurantUserInfo.child(uid).child("favorites").child(id).remove();

	}

	getUserFavouriteList() {

		var uid = firebase.auth().currentUser.uid;

		this.favoriteItemList = this.restaurantUserInfo.child(uid).child("favorites");
		return this.favoriteItemList;
	}


	removeFavItem(item) {
		var uid = firebase.auth().currentUser.uid;

		this.restaurantUserInfo.child(uid).child("favorites").child(item.id).remove();
	}

	deleteUserAddress(id) {

		var uid = firebase.auth().currentUser.uid;

		return this.restaurantUserInfo.child(uid).child("addresses").child(id).remove();
	}


	getUserChatList(id) {
		this.userChatList = this.chats.child(id).child("chat");
		return this.userChatList;
	}


	addRoom(uid, data, userImage, userName) {

		this.chats.child(data.owner_id).child(data.id).child('chat').child(uid).child('list').child("-0000").set({

			type: 'join',
			user: 'user',
			message: 'Welcome to restaurant.',
			timeStamp: firebase.database.ServerValue.TIMESTAMP,
			sendDate: ''

		});

		this.chats.child(data.owner_id).child(data.id).child('chat').child(uid).update({

			restaurantTitle: data.title,
			restaurantImage: data.firebase_url,
			restaurantOwnerId: data.owner_id,
			timeStamp: firebase.database.ServerValue.TIMESTAMP,
			userImage: userImage,
			userName: userName,
			lastMessage: "Hello Dear"

		});




		this.chats.child(uid).child('chat').child(data.id).child('list').child("-0000").set({

			type: 'join',
			user: 'user',
			message: 'Welcome to restaurant.',
			sendDate: ''

		});


		return this.chats.child(uid).child('chat').child(data.id).update({

			restaurantTitle: data.title,
			restaurantImage: data.firebase_url,
			restaurantOwnerId: data.owner_id,
			userImage: userImage,
			userName: userName,
			lastMessage: "Hello Dear"


		});



	}

	getAllChooseItems(): any {
		return this.af.list('/items', (ref) => {
			return ref.limitToFirst(20).orderByChild('popularity');
		});
	}

	getFilterItems(search): any {
		return this.af.list('/items', (ref) => {
			return ref.limitToLast(10).orderByChild('search').startAt(search).endAt(search + '\uf8ff');
		});
	}

	

	getCategoryItems(category): any {
		return this.af.list('/items', (ref) => {
			return ref.orderByChild('categories').equalTo(category);
		});
	}


	getNearestRestaurantItems() {
		var uid = firebase.auth().currentUser.uid;

		return this.hotelCords.child(uid).orderByChild('item_dis');
	}


}
