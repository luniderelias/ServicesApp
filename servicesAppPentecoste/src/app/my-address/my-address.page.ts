import { Component, OnInit } from '@angular/core';
import { Events, ToastController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ServiceProvider } from '../../providers/service';
import { Values } from '../../providers/values';

import * as firebase from 'firebase';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.page.html',
  styleUrls: ['./my-address.page.scss'],
})
export class MyAddressPage implements OnInit {
	
	currentUser: any;
	addressList: any = [];
	userProfiles: any;

  constructor(public loadingCtrl: LoadingController, 
		private route: ActivatedRoute,
		public events: Events,
		public toastCtrl: ToastController, 
		private storage: Storage,
		public socialSharing: SocialSharing,
		public service: ServiceProvider,
		public values:Values) { 
		
		
		  this.currentUser = firebase.auth().currentUser;
	
			console.log(firebase.auth().currentUser.uid);
			
			 if(this.currentUser){
			   this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot =>{
				 this.userProfiles = snapshot.val();
			  });
			 }
			 
			 
			 this.addressList = [];
		  
		  this.service.getCurrentUserAddresses(this.currentUser.uid).on('value', snapshot =>{
			
				this.addressList = [];
				
					snapshot.forEach( snap =>{
						this.addressList.push({
					  
						id: snap.key,
						city: snap.val().city,
						district: snap.val().district,
						street: snap.val().street,
						phone: snap.val().phone,
						number: snap.val().number,
						complement: snap.val().complement
						
						});
					});
							
					console.log(this.addressList);
		});
		
		}

  ngOnInit() {
  }
  
  deleteUserAddress(id){
		this.service.deleteUserAddress(id);
	}


}
