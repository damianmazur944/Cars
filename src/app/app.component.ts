import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


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

