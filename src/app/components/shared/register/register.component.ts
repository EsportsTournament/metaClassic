import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(public authService: AuthService) { }

  signIn() {
    this.authService.GoogleAuth().then( user => {
      console.log(user);
      
    })
  }

}
