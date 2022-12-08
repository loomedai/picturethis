import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-heroheader',
  templateUrl: './heroheader.component.html',
  styleUrls: ['./heroheader.component.scss'],
})
export class HeroheaderComponent implements OnInit {

  constructor(private service:ApiService) { }

    readData:any;

    ngOnInit(): void {
      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData = res.data;
      });
    }
    
  }

