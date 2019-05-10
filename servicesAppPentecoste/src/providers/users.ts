

import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs-compat/Observable';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Injectable()
export class UsersProvider {

  private snapshotChangesSubscription: any;

  downloadURL: Observable<string>;
  
  /**added**/
  public fireAuth : any;
  public restaurantUserInfo: any;

  constructor(public afs: AngularFirestore,public facebook: Facebook, public alertCtrl: AlertController ) {
	  
	  this.fireAuth = firebase.auth(); 
	  
	  this.restaurantUserInfo = firebase.database().ref('/users');
	  
  }

  uploadAvt(file) {
    const randomId = Math.random().toString(36).substring(2);

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child('/users/'+randomId).put(file);
     
    return new Promise<any>((resolve, reject) => {
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {},
        (error) => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.downloadURL = downloadURL;
            console.log('File available at', downloadURL);
            resolve(this.downloadURL);
          });
        }
      );
    });
  }


  loginUser(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email, password, firstname, lastname , phone, address ) {
	  
	  return this.fireAuth.createUserWithEmailAndPassword(email, password)
  	.then((newUser) =>{
  		this.restaurantUserInfo.child(newUser.user.uid).set({
        email: email,
        displayName: firstname,
        lastName: lastname,
        address: address,
        phone: phone,
		facebook: false
        });
  	});
	  
	  
	  /**
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser) => {
         
        //console.log(JSON.stringify(newUser));
        
        resolve(newUser.user);
		
		console.log(newUser.user.uid);
		
		this.restaurantUserInfo.child(newUser.user.uid).set({
        email: email,
        displayName: fullname,
        lastName: fullname,
        address: "",
        phone: "",
		facebook: false
        });

	

      }, error =>{
        this.presentAlertErr(error);
      })
    })
	
	*/
  }

  facebookLogin(){
    return new Promise<any>((resolve, reject) => {
      this.facebook.login(['email']).then( response => {
        
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential).then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
          
          resolve(success);
/**
          this.afs.collection('users', ref => ref.where('id_auth', '==', success.uid)).snapshotChanges().subscribe(snapshots => {

            if(snapshots.length <= 0){
              let tempIndex = success.email.indexOf('@');

              this.snapshotChangesSubscription = this.afs.collection('users').add({
                created: Date(),
                active: true,
                username: success.email.slice(0, tempIndex),
                fullname: success.displayName,
                email: success.email,
                phone: (success.phoneNumber != null)? success.phoneNumber : '',
                address: '',
                avt: success.photoURL,
                id_auth: success.uid
              })
            }

          });
		  
		  */

        })
      })
    }).catch((error) => { console.log(error) });
  }

  getUser(uid){
	  /**
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('users', ref => ref.where('id_auth', '==', uid)).snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
	*/
  }

  updateUser(id_user, val){
	  /**
    return new Promise<any>((resolve, reject) => {
      this.snapshotChangesSubscription = this.afs.collection('users').doc(id_user).update(val)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
	
	*/
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
        text: "Ok",
        role: 'cancel'
      }]
    });
    await alert.present();
  }

}
