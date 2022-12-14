import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api/api.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiService, public auth: AuthService) { }

  readData:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }


  login() {
    this.auth.loginWithRedirect();
  }

  counter = 0;

  increment() {
    this.counter++;
  }

}
