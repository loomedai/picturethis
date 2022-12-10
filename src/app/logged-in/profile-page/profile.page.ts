import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})

export class ProfilePage implements OnInit {

  constructor(private service:ApiService) { }

  readData:any;
  successmsg:any;

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


  //get delete id

  deleteID(id:any)
  {
    console.log(id,'deleteid==>');
    this.service.delete(id).subscribe((res)=>{
      console.log(res),'deleteres==>';
      this.successmsg = res.message;
      this.getAllData();

    });
  }

//get data

  getAllData(){

    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }
}
