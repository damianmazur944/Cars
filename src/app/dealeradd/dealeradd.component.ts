import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car, Dealer, Role} from '../app.component';

@Component({
  selector: 'app-dealeradd',
  templateUrl: './dealeradd.component.html',
  styleUrls: ['./dealeradd.component.css']
})
export class DealeraddComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  delaer: Dealer;
  name;
  surname;
  login;
  password;
  address;
  isLoginValid = false;
  role: Role = new Role(2, 'USER_ROLE');


  ngOnInit(): void {
  }

  onSubmit() {
    this.delaer = new Dealer(this.name, this.surname, this.login, this.password, this.address, this.role, true);

    this.http.post('api/dealers', this.delaer, {responseType: 'text'}).subscribe((data) => {
    });

  }

  checkLogin() {
    this.isLoginValid = false;
    if (this.login.length > 0 && this.login.trim()) {
      this.http.get('api/dealers/login/' + this.login, {responseType: 'text'}).subscribe((data?) => {
          console.log('pobralem:' + data);
          if (!data) {
            this.isLoginValid = true;
            console.log(this.isLoginValid);
          }
        }
      );
    }
  }

}
