import { Component, OnInit } from '@angular/core';
import { Events, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Values } from '../../providers/values';
import { ServiceProvider } from '../../providers/service';
import * as firebase from 'firebase';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';






@Component({
	selector: 'app-new-address',
	templateUrl: './new-address.page.html',
	styleUrls: ['./new-address.page.scss'],
})
export class NewAddressPage implements OnInit {

	form: any;
	currentUser: any;
	errorMessage: any;
	customer: any;
	restaurantName: any;
	cityName: any;
	cityDistrictName: any;
	streetName: any;
	apartmentOfficeName: any;

	public addressForm;
	loading: any;
	submitted = false;

	constructor(public events: Events,
		public service: ServiceProvider,
		public values: Values, 
		private payPal: PayPal,
		private stripe: Stripe,
		private router: Router,
		private route: ActivatedRoute,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
		public formBuilder: FormBuilder) {

		this.form = {};
		this.currentUser = firebase.auth().currentUser;
		console.log(this.currentUser);

		this.addressForm = formBuilder.group({
			city: ['', Validators.compose([Validators.required])],
			district: ['', Validators.compose([Validators.required])],
			street: ['', Validators.compose([Validators.required])],
			number: ['', Validators.compose([Validators.required])],
			phone: ['', Validators.compose([Validators.required])],
			complement: ['', Validators.compose([Validators.required])],
		})

		this.customer = [];

		this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot => {

			this.customer.displayName = snapshot.val().displayName;
			this.customer.email = snapshot.val().email;

		});




		this.service.getRestaurantsList().on('value', snapshot => {

			this.restaurantName = [];

			snapshot.forEach(snap => {
				this.restaurantName.push({
					id: snap.key,
					name: snap.val().title,

				});
			});
		});


		this.service.getCityName().on('value', snapshot => {

			this.cityName = [];

			snapshot.forEach(snap => {
				this.cityName.push({
					id: snap.key,
					name: snap.val().name
				});
			});
		});

		this.service.getCityDistrictName().on('value', snapshot => {

			this.cityDistrictName = [];

			snapshot.forEach(snap => {
				this.cityDistrictName.push({
					id: snap.key,
					name: snap.val().name
				});
			});
		});


		this.service.getStreetName().on('value', snapshot => {

			this.streetName = [];

			snapshot.forEach(snap => {
				this.streetName.push({
					id: snap.key,
					name: snap.val().name
				});
			});
		});

		this.service.getApartmentOfficeName().on('value', snapshot => {

			this.apartmentOfficeName = [];

			snapshot.forEach(snap => {
				this.apartmentOfficeName.push({
					id: snap.key,
					name: snap.val().name
				});
			});
		});

	}

	ngOnInit() {
	}


	addNewAddress() {

	}


	sendAddress() {
		if (!this.addressForm.valid) {
			this.submitted = true;
		} else {
			this.presentLoading();

			this.submitted = false;
			this.service.saveNewAddress(this.addressForm.value.city,
				this.addressForm.value.district, this.addressForm.value.street, this.addressForm.value.number,
				this.customer.displayName, this.customer.email, this.addressForm.value.phone,
				this.addressForm.value.complement, this.currentUser.uid)
				.then(() => {
					this.router.navigateByUrl('/cart');
				});
		}
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'Carregando',
			duration: 2000
		});
		return await this.loading.present();
	}

}
