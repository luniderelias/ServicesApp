import { Component, OnInit } from '@angular/core';
import { Events, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { Storage } from '@ionic/storage';
import { UsersProvider } from '../../providers/users';
import { ServiceProvider } from '../../providers/service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	public signupForm;
	loading: any;
	
	public currentUser: any;
	public userProfiles: any;
	
	constructor(
		public events: Events, 
		private storage: Storage, 
		public loadingCtrl: LoadingController, 
		public alertCtrl: AlertController, 
		public usersProv: UsersProvider, 
		public serviceProv: ServiceProvider,
		public formBuilder: FormBuilder,
		private router: Router
	) {
		
		/**
		this.signupForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			fullname: ['', Validators.compose([Validators.minLength(6), Validators.required])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
			phone: ['', Validators.compose([Validators.minLength(5), Validators.required])],
			address: ['', Validators.compose([Validators.minLength(2), Validators.required])]
		});
		
		*/
		
		
		this.signupForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			firstname: ['', Validators.compose([Validators.required])],
			lastname: ['', Validators.compose([Validators.required])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
			phone: ['', Validators.compose([Validators.minLength(5), Validators.required])],
			address: ['', Validators.compose([Validators.minLength(2), Validators.required])]
		});
	}

	signupUser(){
		if (!this.signupForm.valid) {
			console.log(this.signupForm.value);
		} else {
			this.presentLoading();
			

			  this.usersProv.signupUser(this.signupForm.value.email, this.signupForm.value.password, 
			  this.signupForm.value.firstname, this.signupForm.value.lastname, 
			  this.signupForm.value.phone, this.signupForm.value.address)
			  .then(() => {

			  
			  
			  this.currentUser = firebase.auth().currentUser;
		
				console.log(this.currentUser.uid);
			

				this.serviceProv.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
						console.log(snapshot.val());
						
						this.userProfiles = snapshot.val();
						
						console.log(this.userProfiles);
						
								this.loading.dismiss().then(() => {
									let user = {
										avt: this.userProfiles.facebook,
										username: this.userProfiles.displayName,
										fullname: this.userProfiles.lastName,
										email: this.userProfiles.email,
										address: this.userProfiles.address,
										phone: this.userProfiles.phone,
										id: this.currentUser.uid,

									}
									this.storage.set('user', user);
									this.events.publish('user: change', user);
								//	console.log(data);
									this.router.navigateByUrl('/home');
								});
						
				});


				
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

	async presentAlertErr(err) {
		const alert = await this.alertCtrl.create({
			message: err.message,
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}

	ngOnInit() {
	}

}
