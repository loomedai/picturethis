import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api/api.service'; 

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
  });
 }
}
