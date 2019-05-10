import { Component , OnInit} from '@angular/core';
import { NavController, LoadingController, ToastController, Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service';

import { Values } from '../../providers/values';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.page.html',
  styleUrls: ['./chat-user.page.scss'],
})
export class ChatUserPage implements OnInit {
	
	data = { type:'', nickname:'', message:'' , restaurantOwnerId: '' };
  chats = [];
  roomkey:string;
  nickname:string;
  offStatus:boolean = false;
  currentUser : any;
  userProfiles: any;
  
  restaurantOwnerId: any;
  
  userIds: any;
  
  restaurantName: any;
  
  userImage: any;
  
  userId: any;
  owner_id_restaurant: any;
  userRestaurantName: any;
  
  roomKey: any;

  constructor(
  public events: Events, 
		public toastCtrl: ToastController, 
		private storage: Storage, 
		public navCtrl: NavController,
		public service: ServiceProvider,
		public loadingCtrl: LoadingController,
		private callNumber: CallNumber,
		public values: Values,
		public router: Router) { 
		
			this.roomKey = this.values.userChatData.id;
	
	
	
			this.userId = this.values.userChatUserId;
			
			
			
			this.owner_id_restaurant = this.values.userChatData.owner_id;
			
			this.userRestaurantName = this.values.userChatData.title;
			
			
		
			//this.roomkey = this.values.userChatData.id;
			
			//this.restaurantOwnerId = this.values.userChatData.owner_id;
			
			//this.restaurantName = this.values.userChatData.title;
			
			//this.userIds = this.values.userChatUserId;
			
			this.userImage = "assets/imgs/no-avt.png";
		
		
				this.currentUser = firebase.auth().currentUser;
	   this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', snapshot =>{
         this.userProfiles = snapshot.val();
      });
	  
	  console.log(this.userProfiles);
	  
	console.log(this.currentUser.uid);
	this.nickname = this.currentUser.uid;
	
	console.log(this.nickname);
	
	
    //this.nickname = this.navParams.get("nickname") as string;
    this.data.type = 'message';
    this.data.nickname = this.nickname;
	this.data.restaurantOwnerId = this.roomKey;

	
    this.data.message = '';

    
	firebase.database().ref('chats/'+this.userId+ '/chat/'+this.roomKey+ '/list').on('value', resp => {	
	
		
      this.chats = [];
	  
	  
	  
      this.chats = snapshotToArray(resp);
	  
	  console.log(this.chats);
	  
      setTimeout(() => {
        if(this.offStatus === false) {
        
        }
      }, 1000);
    });
		
		}
		
		
		sendMessage() {
	  
	  
	  
    //let newData = firebase.database().ref('restaurants/'+this.roomkey+'/chat/'+this.nickname).push();
	
	//console.log(this.nickname);

	//console.log(this.restaurantOwnerId);
	
	console.log(this.userId);
	console.log(this.roomKey);
	
	let newData = firebase.database().ref('chats/'+this.userId+ '/chat/'+this.roomKey + '/list').push();
    newData.set({
      type:this.data.type,
      user:this.nickname,
      message:this.data.message,
      sendDate:Date()
    });
	
	
    firebase.database().ref('chats/'+this.userId+ '/chat/'+this.roomKey).update({
		lastMessage: this.data.message,
		timeStamp: firebase.database.ServerValue.TIMESTAMP,
    });
	
	let secondData = firebase.database().ref('chats/' +this.owner_id_restaurant +'/'+this.roomKey+ '/chat/'+this.userId + '/list').push();
	
	secondData.set({
      type:this.data.type,
      user: this.nickname,
      message:this.data.message,
      sendDate:Date()
    });
	
	
	
	firebase.database().ref('chats/' +this.owner_id_restaurant +'/'+this.roomKey+ '/chat/'+this.userId).update({
      lastMessage: this.data.message,
	  timeStamp: firebase.database.ServerValue.TIMESTAMP,
    });
	
    this.data.message = '';
  }

  exitChat() {
	  
	  
    let exitData = firebase.database().ref('chats/'+this.userId+'/chat/'+this.roomKey+ '/list').push();
    exitData.set({
      type:'exit',
      user:this.userId,
      message:this.userId+' has exited this room.',
      sendDate:Date()
    });
	
	let exitData2 = firebase.database().ref('chats/'+ this.owner_id_restaurant +'/'+this.roomKey+'/chat/'+this.userId + '/list').push();
    exitData2.set({
      type:'exit',
      user:this.userId,
      message:this.userId+' has exited this room.',
      sendDate:Date()
    });
	
	
    this.offStatus = true;

  }
  
   ngOnInit() {
  }
  
  
  
  
  
  

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};