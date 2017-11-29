import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../app.component';

@Component({
  selector: 'app-caradd',
  templateUrl: './caradd.component.html',
  styleUrls: ['./caradd.component.css']
})
export class CaraddComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  car: Car;
  dealers;
  dealer;
  brand;
  model;
  displacment;
  engineType;
  transmissionType;
  photoLink;


  ngOnInit(): void {
    this.http.get('http://localhost:8080/dealers', {responseType: 'text'}).subscribe(data => {
      this.dealers = data;
    });
  }

  onSubmit() {
    this.car = new Car(this.brand, this.model, this.displacment, this.engineType, this.transmissionType, this.dealer, this.photoLink);
    console.log(this.dealers)
    console.log(JSON.stringify(this.dealer))
    this.http.post('http://localhost:8080/cars', this.car, {responseType: 'text'}).subscribe((data) => {
    });

  }

}
