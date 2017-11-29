import {Component} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  login: string;
  password: string;

  constructor(private http: HttpClient) {
  }

  signIn() {
    const params = new URLSearchParams();
    params.append('username', this.login);
    params.append('password', this.password);
    params.append('submit', 'submit');

    this.http.post('/api/login', params.toString(), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    })
      .subscribe(
        data => localStorage.setItem('token', 'token'),
        (err: HttpErrorResponse) => {
          if (!err.message.includes('error')) {
            localStorage.setItem('token', 'token');
          }
        });
  }
}
