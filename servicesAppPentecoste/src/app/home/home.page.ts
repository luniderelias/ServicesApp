import { Component , OnInit} from '@angular/core';
import { NavController, LoadingController, ToastController, Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service';

import { Values } from '../../providers/values';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { Router } from '@angular/router';

import * as firebase from 'firebase';


@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {

	
	list_product: any;
	list_product_new: any;
	list_product_slide: any;
	loading: any;
	start: any;
	id_user: any;
	favo_str: string = '';
	id_favo_str: any;
	list_cart: Array<any>;
	
	shops: any;
	
	userProfiles: any;
	currentUser: any;

	constructor(public events: Events, 
		public toastCtrl: ToastController, 
		private storage: Storage, 
		public navCtrl: NavController,
		public service: ServiceProvider,
		public loadingCtrl: LoadingController,
		private callNumber: CallNumber,
		public values: Values,
		public router: Router
		){

		
		
		this.presentLoading();


		this.shops = [];


		this.events.subscribe('cart_list: change', (lst) => {
			this.list_cart = lst;
		});

		this.events.subscribe('user: change', (user) => {
			
			if(user || user != null){
				console.log(user)
				this.id_user = user.uid;
				
				console.log(this.id_user);
				
		
				
			

			

			

				
			}
		});
	}


	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	loadMore(event){
		/**
		this.productsProv.getProduct(this.start, 2).then(data => {
			this.list_product = this.list_product.concat(data);
			console.log(data);
			if(data.length > 0){
				this.start = data[data.length - 1].payload.doc.data().name;
			}
			console.log(this.list_product);

			setTimeout(() => {
				event.target.disabled = true;
			}, 1500);
		});
		
		*/
	}
	







	addCart(item){

		console.log(item);

		let itemCv = {
			id: item.payload.doc.id,
			name: item.payload.doc.data().name,
			price: item.payload.doc.data().price,
			discount: item.payload.doc.data().discount,
			description: item.payload.doc.data().description,
			vote: item.payload.doc.data().vote,
			created: item.payload.doc.data().created,
			id_cat: item.payload.doc.data().id_cat,
			tag: item.payload.doc.data().tag,
			thumb: item.payload.doc.data().thumb,
			thumb1: item.payload.doc.data().thumb1,
			thumb2: item.payload.doc.data().thumb2,
			thumb3: item.payload.doc.data().thumb3,
			thumb4: item.payload.doc.data().thumb4,
			quantity: 1
		}

		let temp = this.list_cart.filter((element) => {
			if(element.id == itemCv.id){
				element.quantity = 1 + element.quantity;
				return true;
			}
		})
		console.log(temp);
		if(temp.length == 0){
			this.list_cart = this.list_cart.concat(itemCv);
		}
		
		this.presentToast();

		// this.list_cart = new Array();
		this.events.publish('cart_list: change', this.list_cart);
		this.storage.set('cart_list', this.list_cart);
		console.log(this.list_cart);
	}

	async presentToast() {
		const toast = await this.toastCtrl.create({
			message: 'added success',
			duration: 2000,
			position: 'top'
		});
		toast.present();
	}
	
	 ngOnInit(){

  
  
			  
			 
	
	

     
  }
  
  ionViewWillEnter(){
		
			
			 this.service.getRestaurantsList().on('value', snapshot =>{
				
				console.log(snapshot.val());
			 
			 
				this.shops = [];
				
				snapshot.forEach( snap =>{
					//this.params.data.items.push({
					this.shops.push({
					  id: snap.key,
					  title: snap.val().title,
					  subtitle:  snap.val().info,
					  backgroundImage: snap.val().firebase_url,
					  icon: "ios-arrow-dropright",
					  iconText: "ReadMore",
					  phonenumber: snap.val().phonenumber,
					  lat: snap.val().lat,
					  long: snap.val().long,
					  description: snap.val().info,
					  firebase_url:snap.val().firebase_url,
					  address:snap.val().address,
					  category:snap.val().category,
					  images:snap.val().image,
					  img: snap.val().img,
					  info: snap.val().info,
					  mark: snap.val().mark,
					  option: snap.val().option,
					  outlet: snap.val().outlet,
					  owner_id:snap.val().user_id,
					  market:true,
					});  
				  });
				  
				  console.log(this.shops);
				});
				
		
	}
	
	
  
   call(data){
	  
	  console.log(data);
	  this.callNumber.callNumber(data.phonenumber, true)
            .then(() =>{} )
            .catch(() =>{});
  }
  
  
  chat(data){
	  
	  
	  this.currentUser = firebase.auth().currentUser;
	  
	  
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();
	   
	  
	   
	  

      });
     
	 
	 console.log(this.userProfiles);
	 
	  if(this.userProfiles.photoURL ){
			this.service.addRoom(this.currentUser.uid,data,this.userProfiles.displayName,this.userProfiles.photoURL);
			
			console.log(data);
                         
			this.values.userChatUserId = this.currentUser.uid;
			this.values.userChatData = data;
						 
			

			this.router.navigateByUrl('chat');			
		}
		
		else{
			this.service.addRoom(this.currentUser.uid,data,this.userProfiles.displayName,"assets/imgs/no-avt.png");
			
			console.log(data);
			
			this.values.userChatUserId = this.currentUser.uid;
			this.values.userChatData = data;
						 
            this.router.navigateByUrl('chat');             
			
		}
	  
	 		   
		
	
                     
	  
	  
  }

}
