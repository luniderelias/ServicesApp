import { Component, OnInit } from '@angular/core';
import { Events , LoadingController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Values } from '../../providers/values';
import { ServiceProvider } from '../../providers/service';
import * as firebase from 'firebase';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
	
	currentUser: any;
	myOrderList: any = {};
	id:any;
	
	params:any = {};
	
	loading: any;
	
	tests: any;

  constructor(public events: Events, public service: ServiceProvider, 
  public values:Values, private payPal: PayPal, private stripe: Stripe,
  private router: Router, private route: ActivatedRoute, public loadingCtrl: LoadingController) { 
  
			  this.currentUser = firebase.auth().currentUser;
			  
			  this.tests = "name";
	  
	  this.myOrderList = [];
			//this.params.data.items = [];
			/**
			this.presentLoading();
			
			
						this.myOrderList = [];
			
				this.service.getMyOrderList(this.currentUser.uid).on('value', snapshot =>{
					
					
							//this.loading.dismiss().then(() => {
											console.log(snapshot.val());
										 snapshot.forEach( snap => {
											 this.myOrderList.push({
												  id: snap.key,
												 //customerDetails: snap.val().customerDetails,
												  items: snap.val().items,
												  total: snap.val().total,
												  status: snap.val().status,
												  timeStamp: snap.val().timeStamp
										   });
										  });
										
										  
										  console.log(this.myOrderList);
							//});
					//this.params.data.items = [];
				
			  });
			
						*/
			
		
  }
  
 

  ngOnInit() {
	  
			
			
	  
			
	  
  
  }
  
  
  async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}
	
	ionViewWillEnter(){
		
		
		
		this.presentLoading();
			
			
						this.myOrderList = [];
			
				this.service.getMyOrderList(this.currentUser.uid).on('value', snapshot =>{
					
					
							//this.loading.dismiss().then(() => {
											console.log(snapshot.val());
										 snapshot.forEach( snap => {
											 this.myOrderList.push({
												  id: snap.key,
												 //customerDetails: snap.val().customerDetails,
												  items: snap.val().items,
												  total: snap.val().total,
												  status: snap.val().status,
												  timeStamp: snap.val().timeStamp
										   });
										  });
										
										  
										  console.log(this.myOrderList);
							//});
					//this.params.data.items = [];
				
			  });
		
	}

}
