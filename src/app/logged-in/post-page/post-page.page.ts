import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {

  constructor(private service:ApiService) { }

  readData:any;
  readCategory:any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData = res.data;
    });
  }
  
  getType(typeC:any){
    this.service.getCategory(typeC).subscribe((res)=>{
      console.log(res,"res==>");
      this.readCategory = res.data;
    }); 
  }

  counter = 0;

  increment() {
    this.counter++;
  }
}