import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';


@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.page.html',
  styleUrls: ['./favorite-page.page.scss'],
})
export class FavoritePagePage implements OnInit {

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