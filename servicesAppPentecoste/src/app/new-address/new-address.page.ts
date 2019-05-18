import { URLSearchParams } from '@angular/http';
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
	redirectLink: any;
	cod: any;
	loading = false;
	public addressForm;
	submitted = false;
	selectedCity: any;

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
			this.loading = true;
			this.route.params.subscribe(params => {

				console.log(params);
		  
				this.redirectLink = params.redirectLink;
				this.cod = params.cod;
				this.loading = false;
			  });

		this.form = {};
		this.currentUser = firebase.auth().currentUser;

		this.addressForm = formBuilder.group({
			city: ['', Validators.compose([Validators.required])],
			district: ['', Validators.compose([Validators.required])],
			street: ['', Validators.compose([Validators.required])],
			number: ['', Validators.compose([Validators.required])],
			phone: ['', Validators.compose([Validators.required])],
			complement: ['', Validators.compose([Validators.required])],
		})

		this.customer = [];
		this.loading = true;
		this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot => {
			this.customer.displayName = snapshot.val().displayName;
			this.customer.email = snapshot.val().email;
			this.loading = false;
		});



		this.loading = true;
		this.service.getRestaurantsList().on('value', snapshot => {

			this.restaurantName = [];

			snapshot.forEach(snap => {
				this.restaurantName.push({
					id: snap.key,
					name: snap.val().title,

				});
			});
			this.loading = false;
		});

		this.loading = true;
		this.service.getCityName().on('value', snapshot => {

			this.cityName = [];

			snapshot.forEach(snap => {
				this.cityName.push({
					id: snap.key,
					name: snap.val().name,
					fare: snap.val().fare
				});
			});
			this.loading = false;
		});
	}

	ngOnInit() {
	}


	addNewAddress() {

	}
	public selectObjectById(list: any[], id: string, property: string) {
		var item = list.find(item => item.name === id);
		this.selectedCity = item;
	}

	sendAddress() {
			this.loading = true;
			this.submitted = false;
			this.service.saveNewAddress(this.selectedCity,
				this.addressForm.value.district, this.addressForm.value.street, this.addressForm.value.number,
				this.customer.displayName, this.customer.email, this.addressForm.value.phone,
				this.addressForm.value.complement, this.currentUser.uid)
				.then((res) => {
						this.loading = false;
						this.presentAlert('Sucesso!', 'Endereço cadastrado com sucesso!');
						this.router.navigate([this.redirectLink, {cod: this.cod}]);
				}, (error) => {
						this.loading = false;
						this.presentAlert('Erro!', 'Desculpe. Ocorreu um erro ao cadastrar enderço');
				});
		}

	checkFormValid() {
		if (!this.addressForm.valid) {
			this.submitted = true;
		} else {
			this.presentConfirmAlert();
		}
	}

	async presentAlert(title, msg) {
		const alert = await this.alertCtrl.create({
			header: title,
			message: msg,
			buttons: ['OK']
		});
		await alert.present();
	}

	async presentConfirmAlert() {
		const alert = await this.alertCtrl.create({
			message: 'Deseja confirmar esta ação?',
			buttons: [{
				text: 'Sim',
				handler: () => {
					this.sendAddress();
				}
			}]
		});
		await alert.present();
	}

}
