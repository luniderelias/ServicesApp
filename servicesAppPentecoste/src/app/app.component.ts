import { Component } from '@angular/core';
import { Platform, Events, MenuController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

import { environment } from '../environments/environment';

// import * as firebase from 'firebase';


import { ThemeProvider } from '../providers/theme';
import { UsersProvider } from '../providers/users';
import { ServiceProvider } from '../providers/service';
import { Values } from '../providers/values';

import { tap } from 'rxjs/operators';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';


import * as firebase from 'firebase';

import { TranslateService } from '@ngx-translate/core'; // add this

import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  menu = [];
  user: any;
  
  public fireAuth: any;
  public userProfiles: any;

  constructor(
    
    private themeProvider: ThemeProvider,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController, 
    public events: Events, 
    private storage: Storage, 
    public usersProv: UsersProvider, 
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public values: Values,
	private translate: TranslateService,
	private geo: Geolocation,
	
  ) {

    this.menu = environment.menu;


	
	
	this.fireAuth = firebase.auth();
	
  
	
	firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          
          this.values.userRole = firebase.database().ref('/users').child(user.uid).on('value', snapshot =>{
            if(snapshot.val()){
                this.userProfiles = snapshot.val();
            }
          
          });
		}
	});
	
	
	const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.values.isLoggedIn = true;
          this.values.userRole = firebase.database().ref('/Customer-Role').child(user.uid).on('value', snapshot =>{
            if(snapshot.val()){
                this.values.userRole = snapshot.val().role;
            }
          
          });
          
        }
      });

 



    this.events.subscribe('user: change', (user) => {
      if(user || user != null){
        console.log('userchange');
        console.log(user);
        this.user = user;
		
		this.values.isLoggedIn = true;
		
        this.router.navigateByUrl('home');
        this.menuCtrl.enable(true);
      }else{
        this.router.navigateByUrl('login');
        this.menuCtrl.enable(false);
      }
    });


    this.storage.ready().then(() => {
      this.storage.get('user').then((val) => {
        console.log(val);
        if(val != null){
          this.user = val;
          this.router.navigateByUrl('home');
          this.menuCtrl.enable(true);
        }else{
          this.router.navigateByUrl('login');
          this.menuCtrl.enable(false);
        }
      })
    })


    // firebase.auth().onAuthStateChanged((user) => {
    //   if(!user){
    //     console.log("not login");
    //     this.menuCtrl.enable(false);
    //     this.router.navigateByUrl('login');
    //   }else{
    //     console.log("login");
    //     storage.ready().then(() => {
    //       storage.get('user').then((val) => {
    //         console.log(val);
    //         this.user = val;
    //         this.menuCtrl.enable(true);
    //         this.router.navigateByUrl('home');
    //       });
    //     })
    //   }
    // });


    this.initializeApp();
	
	let userLang = navigator.language.split('-')[0];
    userLang = /(english|deutsch)/gi.test(userLang) ? userLang : 'english';
    this.translate.use(userLang);
  }

  ionViewWillEnter(){

  }


  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg.body,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
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
