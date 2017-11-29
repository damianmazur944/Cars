import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dealerlist',
  templateUrl: './dealerlist.component.html',
  styleUrls: ['./dealerlist.component.css']
})
export class DealerlistComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  dealers;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/dealers').subscribe(data => {
      console.log(data)
      this.dealers = data;
    });
  }

}
