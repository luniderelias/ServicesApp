import { Component } from '@angular/core';
import { MenuController, Events } from '@ionic/angular';
import { UsersProvider } from 'src/providers/users';
import { Router } from '@angular/router';
import { Values } from 'src/providers/values';

import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-setting',
	templateUrl: './setting.page.html',
	styleUrls: ['./setting.page.scss'],
})
export class SettingPage {
	user: any;
	profile = '/profile';
	forgot = '/forgot';

	constructor(
		private storage: Storage,
		public menuCtrl: MenuController,
		public usersProv: UsersProvider,
		private router: Router,
		public values: Values,
		public events: Events) {

			this.events.subscribe('user: change', (user) => {
				if (user || user != null) {
				  this.user = user;
				}
			  });
	}
	

	logout() {
		this.usersProv.logoutUser().then(() => {
		  this.storage.remove('user');
		  this.user = null;
		  this.storage.remove('cart_list');
		  this.router.navigateByUrl('/login');
		  this.menuCtrl.enable(false);
		});
	  }
}
