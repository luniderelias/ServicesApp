import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable()
export class FcmService {

  constructor(
    private fbase: Firebase,
    private afs: AngularFirestore,
    private platform: Platform,
    private af: AngularFireDatabase,
    public router: Router) {
  }

  async getToken(uid) {
    let token;

    token = await this.fbase.getToken();

    if (this.platform.is('android')) {
      token = await this.fbase.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.fbase.getToken();
      await this.fbase.grantPermission();
    }

    this.saveToken(token, uid);
  }

  private saveToken(token, uid) {
  if (!token) { return; }
  const devicesRef = firebase.database().ref('/devices');

  const data = {
    token,
    user_id: uid,
  };

  return devicesRef.child(data.user_id).set(data.token);
  }

  onNotifications() {
    return this.fbase.onNotificationOpen();
  }
}
