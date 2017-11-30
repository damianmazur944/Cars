import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Injectable()
export class AuthService {

  constructor(public _router: Router, public http: HttpClient, public location: Location) {
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  signIn(loginData) {
    const params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('submit', 'submit');

    this.http.post('/api/login', params.toString(), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    })
      .subscribe(
        () => localStorage.setItem('token', 'token'),
        (err: HttpErrorResponse) => {
          if (!err.message.includes('error')) {
            localStorage.setItem('token', 'token');
            this._router.navigateByUrl('/');
          }
        });
  }

  logout() {
    const params = new HttpParams().set('logout', '');
    this.http.post('/api/login', params).subscribe(
      () => {
        localStorage.removeItem('token');
        this._router.navigate(['/sign-in']);
      },
      () => {
        localStorage.removeItem('token');
        this._router.navigate(['/sign-in']);
      }
    );
  }

}
