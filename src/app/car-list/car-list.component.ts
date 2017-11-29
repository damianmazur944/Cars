import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  cars;
  dealerId;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dealerId = +params['id'];
    });
    console.log(this.dealerId);
    if (!this.dealerId) {
      this.http.get('/api/cars').subscribe(data => {
        this.cars = data;
      });
    }
    else {
      this.http.get('/api/cars/getDealerCars/' + this.dealerId).subscribe(data => {
        this.cars = data;
      });
    }
  }
}
