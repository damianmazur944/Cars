import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  loginError = new BehaviorSubject('');
  currentLoginError = this.loginError.asObservable();
  constructor(public _router: Router, public http: HttpClient, public location: Location, public cookieService: CookieService) {
  }

  public isAuthenticated(): boolean {
    return !!this.cookieService.get('LoggedUser');
  }

  signIn(loginData) {
    const params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('submit', 'submit');
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
    }

    this.http.post('/api/login', params.toString(), {
      headers, responseType: 'text'
    })
      .subscribe(
        (response) => {
          this.http.get('/api/security/username', {responseType: 'text'}).subscribe((user) => {
            this.cookieService.set('LoggedUser', user);
            this._router.navigateByUrl('/');
          });
        }, (err) => {
          this.loginError.next('Bad credentials, please try again.');
          console.log(this.loginError);
        });
  }

  logout() {
    const params = new HttpParams().set('logout', '');
    this.http.post('/api/login', params).subscribe(
      () => {
        this.cookieService.delete('LoggedUser');
        this._router.navigate(['/sign-in']);
      },
      () => {
        this.cookieService.delete('LoggedUser');
        this._router.navigate(['/sign-in']);
      }
    );
  }
}
