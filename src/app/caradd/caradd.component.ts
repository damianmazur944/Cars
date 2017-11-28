import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-caradd',
  templateUrl: './caradd.component.html',
  styleUrls: ['./caradd.component.css']
})
export class CaraddComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  dealers;

  ngOnInit(): void {
    this.dealers = this.http.get('http://localhost:8080/dealers');
  }

}
