import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs-compat/Observable';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { auth } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { GooglePlus } from '@ionic-native/google-plus';

@Injectable()
export class UsersProvider {

  private snapshotChangesSubscription: any;

  downloadURL: Observable<string>;

  /**added**/
  public fireAuth: any;
  public restaurantUserInfo: any;

  constructor(
    private af: AngularFireDatabase,
    public afs: AngularFirestore,
    public facebook: Facebook,
    public alertCtrl: AlertController) {

    this.fireAuth = firebase.auth();

    this.restaurantUserInfo = firebase.database().ref('/users');

  }

  uploadAvt(file) {
    const randomId = Math.random().toString(36).substring(2);

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child('/users/' + randomId).put(file);

    return new Promise<any>((resolve, reject) => {
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => { },
        (error) => { },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.downloadURL = downloadURL;
            resolve(this.downloadURL);
          });
        }
      );
    });
  }


  loginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email, password, firstname, lastname, phone, address) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.createUser(newUser.user, email, firstname, lastname, address, phone);
      });
	
  }

  createUser(newUser, email, firstname, lastname, address, phone) {
    return new Promise<any>((resolve, reject) => {
      this.restaurantUserInfo.child(newUser.uid).set({
        email: email,
        displayName: firstname,
        lastName: lastname,
        address: address,
        phone: phone,
        facebook: false
      });
    });
  }

  loginGoogleUser(): Promise<firebase.auth.UserCredential> {
    try {
      return GooglePlus.login({
        webClientId: '983922821843-akfilvr7tp06mbln8fhitsr5dbgd1ol6.apps.googleusercontent.com',
        offline: true,
        scopes: 'profile email'
      }).then( res => {
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        return firebase.auth().signInAndRetrieveDataWithCredential(googleCredential);
      });
    } catch (err) {}
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      return await this.fireAuth.signInWithPopup(provider);
    } catch (err) {}
  }


  async webFacebookLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      return await this.fireAuth.signInWithPopup(provider);
    } catch (err) {}
  }

  async facebookLogin(): Promise<firebase.auth.UserCredential> {
    try {
      return this.facebook.login(['email']).then(response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        return firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential);
      });
    } catch (err) {}
  }

  getUser(uid) {
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('users', ref => ref.where('id_auth', '==', uid)).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  updateUser(val) {
      return firebase.database().ref('/users').child(firebase.auth().currentUser.uid).update(val);
  }

  resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser() {
    return firebase.auth().signOut();
  }


  async presentAlertErr(err) {
    const alert = await this.alertCtrl.create({
      message: err,
      buttons: [{
        text: 'Ok',
        role: 'cancel'
      }]
    });
    await alert.present();
  }

}
