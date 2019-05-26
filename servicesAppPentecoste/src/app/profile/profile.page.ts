import { Component, OnInit } from '@angular/core';
import { Events, MenuController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { UsersProvider } from '../../providers/users';
import { Router } from '@angular/router';

// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import {File} from '@ionic-native/file';
// import {FilePath} from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
declare var cordova: any;


@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	userForm: FormGroup;
	user: any;
	submitted = false;
	loading = false;

	constructor(
		public menuCtrl: MenuController,
		public events: Events,
		public alertCtrl: AlertController,
		private storage: Storage,
		public loadingCtrl: LoadingController,
		public usersProv: UsersProvider,
		private formBuilder: FormBuilder,
		private router: Router,
		public camera: Camera,
		public platform: Platform
	) {
	}

	ionViewWillEnter() {
		this.loading = true;
		this.menuCtrl.enable(true);
		this.menuCtrl.close();
		this.storage.ready().then(() => {
			this.storage.get('user').then((val) => {
				this.user = val;
				this.userForm = this.formBuilder.group({
					username: [val.username, Validators.compose([Validators.required])],
					phone: [val.phone, Validators.compose([Validators.required])]
				});
			});
			this.loading = false;
		});
	}

	selectPhotoOptions() {
		this.presentAlertConfirm();
	}

	async presentAlertConfirm() {

	}

	checkFormValid() {
		if (!this.userForm.valid) {
			this.submitted = true;
		} else {
			this.presentConfirmAlert();
		}
	}

	updateUser() {
		this.loading = true;
		this.submitted = false;
		this.usersProv.updateUser(this.userForm.value).then(data => {
				this.user.username = this.userForm.value.username;
				this.user.fullname = '';
				this.user.address = '';
				this.user.phone = this.userForm.value.phone;
				this.user.updated = true;
				this.storage.set('user', this.user);
				this.events.publish('user: change', this.user);
				this.presentAlert('Sucesso!', 'Dados Alterados com Sucesso!');
				this.loading = false;
		}, error => {
				this.presentAlert('Erro!', 'Desculpe. Ocorreu um erro ao Salvar Dados');
				this.loading = false;
		});
	}

	logout() {
		this.usersProv.logoutUser().then(() => {
			this.storage.remove('user');
			this.user = null;
			this.router.navigateByUrl('/login');
			this.menuCtrl.enable(false);
		});
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
					this.updateUser();
				}
			}]
		});
		await alert.present();
	}


	ngOnInit() {
	}

}
