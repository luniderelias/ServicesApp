import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';

import { UserInterface } from './../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // new
  redirectUrl: string;
  authState: Observable<firebase.User>;
  private currentUserSubject: BehaviorSubject<UserInterface>;
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor( private router: Router, private firebaseAuth: AngularFireAuth, private afsAuth: AngularFireAuth) {
    this.currentUserSubject = new BehaviorSubject<UserInterface>(JSON.parse(localStorage.getItem('current_user')));

    this.firebaseAuth.authState.subscribe((user) => {
      if (user) {
        this.isLoggedIn.next(true);

        // NOW, when the callback from firebase came, and user is logged in,
        // we can navigate to the attempted URL (if exists)
        if (this.redirectUrl ) {
          this.router.navigate([this.redirectUrl]);
        }
      } else {
        this.isLoggedIn.next(false);
      }
   });
  }



  loginFacebookUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user));
  }

  loginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user));
  }

  logoutUser() {
    return this.afsAuth.auth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  public get currentUserValue(): UserInterface {
    return this.currentUserSubject.value;
}

  get authenticated(): boolean {
    return (this.afsAuth.authState !== undefined && this.authState !== null);
  }

  get currentUserObservable(): any {
    return this.afsAuth.auth;
  }

  private updateUserData(user) {
	  /**
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        editor: true
      }
    }
    return userRef.set(data, { merge: true })
	
	*/
	return false;
  }


  isUserAdmin(userUid) {
    //return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }


}
