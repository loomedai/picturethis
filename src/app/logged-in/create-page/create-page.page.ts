import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service'; 
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.page.html',
  styleUrls: ['./create-page.page.scss'],
})
export class CreatePagePage implements OnInit {

  constructor(private service:ApiService, alertcontroller:AlertController, private router:ActivatedRoute) { }
  errormsg:any;
  successmsg:any;
  getparamid:any

 // const [presentAlert] = useIonAlert();

  ngOnInit() {
    this.getparamid = this.router.snapshot.paramMap.get('id');
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
