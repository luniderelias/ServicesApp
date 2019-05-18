import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { UsersProvider } from '../../providers/users';
import { Storage } from '@ionic/storage';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.page.html',
	styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

	public resetPasswordForm;


	user: any;
	my_photo: any = null;
	addressForm: FormGroup;
	loading = false;

	constructor(
		public usersProv: UsersProvider,
		public alertCtrl: AlertController,
		public formBuilder: FormBuilder,
		private storage: Storage,
	) {

		this.resetPasswordForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
		})
	}

	resetPassword() {
		if (!this.resetPasswordForm.valid) {
			console.log(this.resetPasswordForm.value);
		} else {
			this.loading = true;
			this.usersProv.resetPassword(this.resetPasswordForm.value.email).then((user) => {
				this.loading = false;
				this.presentAlert('Sucesso!', 'Por favor, confira seu Email. Enviamos um link para redefinição de senha. Obrigado!');
			}, (error) => {
				this.loading = false;
				this.presentAlert('Erro!', 'Não foi possível enviar o Email');
			});
		}
	}

	async presentAlert(title, msg) {
		const alert = await this.alertCtrl.create({
			header: title,
			message: msg,
			buttons: [{
				text: 'OK',
			}]
		});
		await alert.present();
	}

	ngOnInit() {
	}


	ionViewWillEnter() {
		this.storage.ready().then(() => {
			this.storage.get('user').then((val) => {
				console.log(val);
				this.user = val;
				this.addressForm = this.formBuilder.group({
					username: [val.username],
					fullname: [val.fullname],
					address: [val.address],
					phone: [val.phone]
				});
			})
		})
	}

}
