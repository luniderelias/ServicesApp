import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { UsersProvider } from '../../providers/users';
import { Storage } from '@ionic/storage';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.page.html',
	styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
	
	public resetPasswordForm;
	
	
	user: any;
	loading: any;
	my_photo: any = null;
	addressForm : FormGroup;

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
			this.usersProv.resetPassword(this.resetPasswordForm.value.email).then((user) => {
				this.presentAlertErr('Please check your inbox. We have sent you reset password link. Thanks!');
			}, (error) => {
				this.presentAlertErr(error.message);
			});
		}
	}

	async presentAlertErr(err) {
		const alert = await this.alertCtrl.create({
			message: err,
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}

	ngOnInit() {
	}
	
	
	ionViewWillEnter(){
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
