import { Component , OnInit} from '@angular/core';
import { NavController, LoadingController, ToastController, Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service';

import { Values } from '../../providers/values';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {
	
	
	userProfiles: any;
	currentUser: any;
	userChatList: any;

  constructor( public events: Events, 
		public toastCtrl: ToastController, 
		private storage: Storage, 
		public navCtrl: NavController,
		public service: ServiceProvider,
		public loadingCtrl: LoadingController,
		private callNumber: CallNumber,
		public values: Values,
		public router: Router) { 
		
		
					 this.currentUser = firebase.auth().currentUser;
	   this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot =>{
         this.userProfiles = snapshot.val();
      });
	  
	  console.log(this.currentUser);
	  console.log(this.userProfiles);
	  
	  /**
	  this.service.getUserChatList(this.currentUser.uid)
	  .on('value', snapshot =>{
    		this.userChatList = [];
			
			
		 snapshot.forEach( snap => {
      	 	 this.userChatList.push({
  		    	  id: snap.key,
				  list: snap.val().list,
				  restaurantImage: snap.val().restaurantImage,
				  restaurantName: snap.val().restaurantTitle,
				  lastMessage: snap.val().lastMessage,
				  restaurantOwnerId: snap.val().restaurantOwnerId,
				  timeStamp: snap.val().timeStamp,
				});
		
				  
				  
			});
			
			console.log(this.userChatList);
	  
	  });
	  
	  */
		
		
		}

  ngOnInit() {
  }
  
  goToChat(data){
	  
	  
	  this.currentUser = firebase.auth().currentUser;
	  
	  
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();
	   
	  
	   
	  

      });
     
	 
	 console.log(this.userProfiles);
	 
	  if(this.userProfiles.photoURL ){
			//this.service.addRoom(this.currentUser.uid,data,this.userProfiles.displayName,this.userProfiles.photoURL);
			
			//console.log(data);
                         
			this.values.userChatUserId = this.currentUser.uid;
			this.values.userChatData = data;
						 
			

			this.router.navigateByUrl('chat-user');			
		}
		
		else{
			//this.service.addRoom(this.currentUser.uid,data,this.userProfiles.displayName,"assets/imgs/no-avt.png");
			
			//console.log(data);
			
			this.values.userChatUserId = this.currentUser.uid;
			this.values.userChatData = data;
						 
            this.router.navigateByUrl('chat-user');             
			
		}
	  
	 		   
		
	
                     
	  
	  
  }
  
  
  ionViewWillEnter(){
		
			
			 		 this.currentUser = firebase.auth().currentUser;
	   this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot =>{
         this.userProfiles = snapshot.val();
      });
	  
	  console.log(this.currentUser);
	  console.log(this.userProfiles);
	  
	  this.service.getUserChatList(this.currentUser.uid)
	  .on('value', snapshot =>{
    		this.userChatList = [];
			
			
		 snapshot.forEach( snap => {
      	 	 this.userChatList.push({
  		    	  id: snap.key,
				  list: snap.val().list,
				  restaurantImage: snap.val().restaurantImage,
				  restaurantName: snap.val().restaurantTitle,
				  lastMessage: snap.val().lastMessage,
				  restaurantOwnerId: snap.val().restaurantOwnerId,
				  timeStamp: snap.val().timeStamp,
				});
		
				  
				  
			});
			
			console.log(this.userChatList);
	  
	  });
				
		
	}

}
