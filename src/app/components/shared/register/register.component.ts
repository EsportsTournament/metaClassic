import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    console.log('trying');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log(user);
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

}
