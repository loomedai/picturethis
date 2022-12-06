import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-homepost',
  templateUrl: './homepost.component.html',
  styleUrls: ['./homepost.component.scss'],
})
export class HomepostComponent implements OnInit {

  constructor(private service:ApiService) { }

  readData:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }
  counter = 0;

  increment() {
    this.counter++;
  }
}
