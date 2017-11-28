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
  dealerId;
  brand;
  model;
  displacment;
  engineType;
  transmissionType;
  photoLink;


  ngOnInit(): void {
    this.http.get('http://localhost:8080/dealers').subscribe(data => {
      this.dealers = data;
    });
  }

  onSubmit() {
    this.car = new Car(this.brand, this.model, this.displacment, this.engineType, this.transmissionType, this.dealerId, this.photoLink);
    this.http.post('http://localhost:8080/cars', this.car).subscribe((data) => {
    });

  }

}
