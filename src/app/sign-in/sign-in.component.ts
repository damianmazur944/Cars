import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  public loginData = {username: '', password: ''};

  constructor(private authService: AuthService) {
  }

  signIn() {
    this.authService.signIn(this.loginData);
  }
}
