import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api/api.service'; 
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss'],
})
export class CreatepostComponent implements OnInit {

  constructor(private service:ApiService, alertcontroller:AlertController) { }

  errormsg:any;
  successmsg:any;
 // const [presentAlert] = useIonAlert();

  ngOnInit(): void {
 //   this.service.getAllData().subscribe((res)=>{
 // });
 }

postForm = new FormGroup({
  'title':new FormControl('',Validators.required),
  'img':new FormControl('',Validators.required),
  'description': new FormControl('',Validators.required)
});

postSubmit(){
    if(this.postForm.valid){
      
      this.service.CreateData(this.postForm.value).subscribe((res)=>{
       console.log(res, 'res==>'); 
       this.postForm.reset();
       this.successmsg = res.message;
      });
      
    }
    else{
     this.errormsg = 'All fields must be filled'
    }
}

}
