import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signInText = 'Sign In';
  currentUser: any;

  constructor(public authService: AuthService) { }

  async signIn() {
    await this.authService.GoogleAuth().then( () => {
      let user = sessionStorage.getItem('user');
      if(user) { 
        this.currentUser = JSON.parse(user);
        this.signInText = this.currentUser.fullName;
      }
    });
  }

}
