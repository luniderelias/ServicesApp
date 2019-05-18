import { Component } from '@angular/core';
import { Platform, Events, MenuController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { environment } from '../environments/environment';
import { ThemeProvider } from '../providers/theme';
import { UsersProvider } from '../providers/users';
import { Values } from '../providers/values';
import { Router } from '@angular/router';
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

        this.values.userRole = firebase.database().ref('/users').child(user.uid).on('value', snapshot => {
          if (snapshot.val()) {
            this.userProfiles = snapshot.val();
          }

        });
      }
    });


    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.values.isLoggedIn = true;
        this.values.userRole = firebase.database().ref('/Customer-Role').child(user.uid).on('value', snapshot => {
          if (snapshot.val()) {
            this.values.userRole = snapshot.val().role;
          }

        });

      }
    });





    this.events.subscribe('user: change', (user) => {
      if (user || user != null) {
        this.user = user;

        this.values.isLoggedIn = true;

        if (this.user.updated) { return; }

        this.router.navigateByUrl('home');
        this.menuCtrl.enable(true);
      } else {
        this.router.navigateByUrl('login');
        this.menuCtrl.enable(false);
      }
    });


    this.storage.ready().then(() => {
      this.storage.get('user').then((val) => {
        console.log(val);
        if (val != null) {
          this.user = val;
          this.router.navigateByUrl('home');
          this.menuCtrl.enable(true);
        } else {
          this.router.navigateByUrl('login');
          this.menuCtrl.enable(false);
        }
      });
    });


    this.initializeApp();

    let userLang = navigator.language.split('-')[0];
    userLang = /(english|deutsch)/gi.test(userLang) ? userLang : 'english';
    this.translate.use('portuguese');
  }

  ionViewWillEnter() {

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

}
