import { Component , OnInit} from '@angular/core';
import { NavController, LoadingController, ToastController, Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service';

import { Values } from '../../providers/values';

import { CallNumber } from '@ionic-native/call-number/ngx';

import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
	
	
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
		
		
			this.roomkey = this.values.userChatData.id;
			
			this.restaurantOwnerId = this.values.userChatData.owner_id;
			
			this.restaurantName = this.values.userChatData.title
			
			this.userIds = this.values.userChatUserId;
			
			this.userImage = "assets/imgs/no-avt.png";
	
	this.currentUser = firebase.auth().currentUser;
	
	
	   this.service.getRestaurantUserProfile(this.userIds).on('value', snapshot =>{
         this.userProfiles = snapshot.val();
      });
	  
	this.nickname = this.userIds;
	
    this.data.type = 'message';
    this.data.nickname = this.nickname;
	this.data.restaurantOwnerId = this.restaurantOwnerId;
	

    this.data.message = '';

    
	firebase.database().ref('chats/'+this.nickname+ '/chat/'+this.roomkey + '/list').on('value', resp => {	
	
		
      this.chats = [];
	  
	  
	  
      this.chats = snapshotToArray(resp);
	  
      setTimeout(() => {
        if(this.offStatus === false) {
         // this.content.scrollToBottom(300);
        }
      }, 1000);
    });
		
		
		}
		
		 sendMessage() {
	
	if(this.data.message == "" || this.data.message == undefined){
		alert("Por favor, escreva sua mensagem.");
	}
	else {
		let newData = firebase.database().ref('chats/'+this.nickname+ '/chat/'+this.roomkey + '/list').push();
    newData.set({
      type:this.data.type,
      user:this.data.nickname,
      message:this.data.message,
      sendDate:Date()
    });
	
	firebase.database().ref('chats/'+this.nickname+ '/chat/'+this.roomkey).update({
		lastMessage: this.data.message,
		timeStamp: firebase.database.ServerValue.TIMESTAMP,
    });
	
	let secondData = firebase.database().ref('chats/' + this.restaurantOwnerId +'/'+this.roomkey+ '/chat/'+this.nickname + '/list').push();
	
	secondData.set({
      type:this.data.type,
      user:this.nickname,
      message:this.data.message,
      sendDate:Date()
    });
	
	firebase.database().ref('chats/' + this.restaurantOwnerId +'/'+this.roomkey+ '/chat/'+this.nickname).update({
		lastMessage: this.data.message,
		timeStamp: firebase.database.ServerValue.TIMESTAMP,
    });
	
    this.data.message = '';
		
	}
	
	
  }

  exitChat() {
    let exitData = firebase.database().ref('restaurants/'+this.roomkey+'/chat/'+this.nickname + '/list').push();
    exitData.set({
      type:'exit',
      user:this.nickname,
      message:this.nickname+' saiu do chat.',
      sendDate:Date()
    });
	
	let exitData2 = firebase.database().ref('restaurants/'+this.nickname+'/chat/'+this.roomkey + '/list').push();
    exitData2.set({
      type:'exit',
      user:this.nickname,
      message:this.nickname+' saiu do chat.',
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
