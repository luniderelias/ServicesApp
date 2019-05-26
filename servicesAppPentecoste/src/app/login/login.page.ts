import { Component, OnInit } from '@angular/core';
import { Events, LoadingController, AlertController, MenuController, Platform } from '@ionic/angular';
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
	disableLogin = false;
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
		public menuCtrl: MenuController,
		public platform: Platform
	) {
		this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
		});
	}

	ionViewWillEnter() {
		this.menuCtrl.enable(false);
		this.menuCtrl.close();
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
				text: 'OK',
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
			return;
		} else {
			this.usersProv.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(authData => {
				this.continueLogin(authData.user);
			}, error => {
				this.loading.dismiss().then(() => {
					this.presentAlertErr();
				});
			});
			this.presentLoading();
		}
	}



	login_fb() {
		if (this.platform.is('cordova')) {
			this.usersProv.facebookLogin().then(authData => {
				this.continueLogin(authData.user);
			}, error => {
				this.loading.dismiss().then(() => {
					this.presentAlertErr();
				});
			});
		} else {
			this.usersProv.webFacebookLogin().then((authData: any) => {
				this.continueLogin(authData.user);
			}, error => {
				this.loading.dismiss().then(() => {
					this.presentAlertErr();
				});
			});
		}
		this.presentLoading();
	}

	async onLoginGoogle() {
		if (this.platform.is('cordova')) {
			this.usersProv.loginGoogleUser()
				.then((authData) => {
					this.continueLogin(authData.user);
				}).catch(err => {
					this.loading.dismiss().then(() => {
						this.presentAlertErr();
					});
				});
		} else {
			this.usersProv.webGoogleLogin()
				.then((authData: any) => {
					this.continueLogin(authData.user);
				}).catch(err => {
					this.loading.dismiss().then(() => {
						this.presentAlertErr();
					});
				});
		}
		this.presentLoading();
	}


	continueLogin(user) {

		this.currentUser = firebase.auth().currentUser;

		this.service.getRestaurantUserProfile(user.uid).on('value', (snapshot) => {
			this.userProfiles = snapshot.val();
			if (this.userProfiles) {
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
					this.loading.dismiss().then(() => {
						this.router.navigateByUrl('/home');
					});
			} else {
				this.usersProv.createUser(user, user.email, user.displayName, '', '', '').then(res => {
					this.continueLogin(user);
				});
			}
		});
	}


	ngOnInit() {
	}

}
