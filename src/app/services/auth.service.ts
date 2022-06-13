import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
let authToken: string;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private http: HttpClient
  ) { }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }  
  // Auth logic to run auth providers
  async AuthLogin(provider: firebase.auth.AuthProvider) {
    try {
      const result = await this.afAuth
        .signInWithPopup(provider);
      console.log('auth: ', result);
      this.afAuth.idToken.subscribe(token => {
        authToken = '' + token;
        let user = {
          fullName: result.user?.displayName,
          email: result.user?.email,
          phoneNumber: result.user?.phoneNumber,
          image: result.user?.photoURL
        }
        console.log(user);
        this.http.post(environment.backendUrl + 'user/login', user).subscribe(
          res => {
            console.log(res);
            sessionStorage.setItem('user', JSON.stringify(res));
          }
        )
      })
    } catch (error) {
      console.log(error);
    }
  }

  // auth token for interceptor
  getAuthToken() {
    return authToken;
  }

  // User
  updateMyDetails(user: User) {
    return this.http.put(environment.backendUrl + `user/updateDetails/`, user);
  }

  // User
  upgradeToCreatorAccount(userId: string) {
    return this.http.post(environment.backendUrl + `user/upgradeToCreator`, userId)
  }

}