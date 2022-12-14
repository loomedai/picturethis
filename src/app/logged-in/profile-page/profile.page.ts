import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../api/api.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})

export class ProfilePage implements OnInit {

  readData:any;
  userPosts:any;
  successmsg:any;
  user: any;

  constructor(private service:ApiService, public auth: AuthService) {
    this.user = {};
  }

  ngOnInit(): void {
    this.auth.user$.subscribe((success: any) => {
      this.user = success;

      console.log(success);
      
      
        const uID = success?.sub?.split('|')[1];
        
        this.service.getUserPosts(Number(uID)).subscribe((res)=>{
          this.userPosts = res.data;
        });
   
    });

    console.log(this.user);

    this.service.getAllData().subscribe((res)=>{
      
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
    
    this.service.delete(id).subscribe((res)=>{
      
      this.successmsg = res.message;
      this.getAllData();

    });
  }

  //get data

  getAllData(){

    this.service.getAllData().subscribe((res)=>{
      
      this.readData = res.data;
    });
  }

//  getUserPosts(){
//    this.service.getUserPosts(11).subscribe((res)=>{
      
//      this.userPosts = res.data;
//    });
//  }


}
