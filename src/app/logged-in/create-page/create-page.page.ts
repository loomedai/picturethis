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
    if(this.getparamid){
      this.service.getSinglePost(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>')
      this.postForm.patchValue({
        title: res.data[0].title,
        img: res.data[0].img,
        description: res.data[0].description,
        category: res.data[0].category,
      });

    });
    }
    
  }

  postForm = new FormGroup({
    'title':new FormControl('',Validators.required),
    'img':new FormControl('',Validators.required),
    'description': new FormControl('',Validators.required),
    'category': new FormControl('', Validators.required)
  });
  
  //new post
  postSubmit(){
    if(this.postForm.valid){
      console.log(this.postForm.value)
      this.service.CreateData(this.postForm.value).subscribe((res)=>{
       console.log(res, 'res==>'); 
       this.postForm.reset();
       this.successmsg = res.message;
       window.location.reload();
      });
      
    }
    else{
     this.errormsg = 'All fields must be filled'
    }

  }
  customAlertOptions = {
  header: 'Sustainable development goals',
  message: 'Choose only one',
  translucent: true,
  };

  //update post
  postUpdate(){

      console.log(this.postForm.value,'updateform');

      if(this.postForm.valid){
      this.service.updateData(this.postForm.value,this.getparamid).subscribe((res)=>{
          console.log(res,'resupdated');
          this.successmsg = res.message;
          window.location.reload();
          
        });
      }else{
      this.errormsg = 'All fields are required'
   }
  }
}
