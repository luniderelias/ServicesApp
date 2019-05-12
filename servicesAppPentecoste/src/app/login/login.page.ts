import { Component, OnInit } from '@angular/core';
import { Events, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { UsersProvider } from '../../providers/users';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { Values } from '../../providers/values';

import { ServiceProvider } from '../../providers/service';

import * as firebase from 'firebase';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public loginForm;
	loading: any;
	userProfile: any = null;
	disableLogin: boolean = false;
	userProfiles: any = null;
	public currentUser: any;

	constructor(
		public events: Events, 
		private storage: Storage, 
		public loadingCtrl: LoadingController, 
		public usersProv: UsersProvider,
		public alertCtrl: AlertController, 
		public formBuilder: FormBuilder, 
		private router: Router,
		public fb: Facebook,
		public values: Values,
		public service: ServiceProvider,
	) {
		this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
		});
	}

	async presentAlert() {
		const alert = await this.alertCtrl.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: ['OK']
		});
		await alert.present();
	}

	async presentAlertErr() {
		const alert = await this.alertCtrl.create({
			message: 'Falha ao Entrar!',
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'Carregando',
			duration: 2000
		});
		return await this.loading.present();
	}

	loginUser(): void {
		if (!this.loginForm.valid) {
			console.log(this.loginForm.value);
		} else {
			this.usersProv.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(authData => {
				
				console.log(authData);
				
			
				this.continueLogin(authData.user);
				
				/**
				  this.userProfile = authData.user;
			
				  
				  
				  this.values.isLoggedIn = true;
				  this.disableLogin = false;
				  console.log(this.values.isLoggedIn);

				  this.service.getUserProfile(authData.user.uid).on('value', (snapshot) =>{
						this.userProfiles = snapshot.val();
				  });

				  this.values.userRole = firebase.database().ref('/users').child(authData.user.uid).on('value', snapshot =>{
					if(snapshot.val()){
					  this.values.userRole = snapshot.val().role;
					}
					
				  });
				  
				  
				  console.log(this.userProfiles);
				  let user = {
						avt: "assets/imgs/no-avt.png",
						username: this.userProfiles.displayName,
						fullname: this.userProfiles.lastName,
						email: this.userProfiles.email,
						address: this.userProfiles.address,
						phone: this.userProfiles.phone,
						id: authData.user.uid,
						id_auth: authData.user.uid,
					}
				  
				  this.events.publish('user: change', user);
				  this.router.navigateByUrl('home');
		  
		 
		 */
		 
				/**
				this.usersProv.getUser(authData.user.uid).then(data => {
					let user = {
						avt: data[0].payload.doc.data().avt,
						username: data[0].payload.doc.data().username,
						fullname: data[0].payload.doc.data().fullname,
						email: data[0].payload.doc.data().email,
						address: data[0].payload.doc.data().address,
						phone: data[0].payload.doc.data().phone,
						id: data[0].payload.doc.id,
						id_auth: data[0].payload.doc.data().id_auth
					}
					console.log(user);
					this.storage.set('user', user).then(() => {
						this.loading.dismiss().then(() => {
							this.events.publish('user: change', user);
							this.router.navigateByUrl('home');
						});
					});
				})
				
				*/
			}, error => {
				this.loading.dismiss().then(() => {
					this.presentAlertErr();
				});
			});
			this.presentLoading();
		}
	}



	login_fb(){
		this.usersProv.facebookLogin().then(authData => {
			console.log(authData);
			
			this.continueLogin(authData);
			/**
			this.usersProv.getUser(authData.uid).then(data => {
				let user = {
					avt: data[0].payload.doc.data().avt,
					username: data[0].payload.doc.data().username,
					fullname: data[0].payload.doc.data().fullname,
					email: data[0].payload.doc.data().email,
					address: data[0].payload.doc.data().address,
					phone: data[0].payload.doc.data().phone,
					id: data[0].payload.doc.id,
					id_auth: data[0].payload.doc.data().id_auth
				}
				this.storage.set('user', user).then(() => {
					this.loading.dismiss().then(() => {
						this.events.publish('user: change', user);
						this.router.navigateByUrl('home');
					});
				});
			})	
			
			*/
		}, error => {
			this.loading.dismiss().then(() => {
				this.presentAlertErr();
			});
		});
		this.presentLoading();
	}

	onLoginGoogle(): void {
		this.usersProv.loginGoogleUser()
		  .then((authData) => {
			console.log(authData);
			this.continueLogin(authData);
		  }).catch(err => console.log('err', err.message));
		  this.presentLoading();
	}


	continueLogin(user) {


		this.currentUser = firebase.auth().currentUser;

		console.log(user);

		this.service.getRestaurantUserProfile(user.uid).on('value', (snapshot) => {
			console.log(snapshot.val());
			
			this.userProfiles = snapshot.val();
			if (this.userProfiles) {
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
			}else{
				this.usersProv.createUser(user, user.email, user.displayName, '', '', '').then(res => this.continueLogin(user));
			}
	});
	}
	

	ngOnInit() {
		
	}

}
