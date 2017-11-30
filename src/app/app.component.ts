import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}

export class Car {
  constructor(private brand: string,
              private model: string,
              private displacment: number,
              private engineType: string,
              private transmissionType: string,
              private dealer,
              private photoLink: string) {
  }
}

export class Dealer {
  constructor(private name: string,
              private surname: string,
              private login: string,
              private password: string,
              private address: string,
              private role,
              private enable: boolean) {
  }
}
  export class Role {
  constructor(private id: number,
              private name: string,
              ) {
  }
}

