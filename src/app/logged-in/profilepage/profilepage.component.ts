import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../api/api.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss'],
})
export class ProfilepageComponent implements OnInit {

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

      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData = res.data;
      });

    });
  }
}
