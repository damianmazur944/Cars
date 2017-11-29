import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor() {
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401;
  }

}
