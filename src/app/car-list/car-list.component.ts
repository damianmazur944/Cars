import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  cars;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/cars').subscribe(data => {
      this.cars = data;
    });
  }

}
