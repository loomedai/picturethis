import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service'; 
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.page.html',
  styleUrls: ['./create-page.page.scss'],
})
export class CreatePagePage implements OnInit {
  selectedFile: File | null = null;
  constructor(private http: HttpClient, private service:ApiService, alertcontroller:AlertController, private router:ActivatedRoute) { }
  errormsg:any;
  successmsg:any;
  getparamid:any
  

    // Called when the file input changes
    onFileChanged(event:any) {
      this.selectedFile = event.target.files[0];
    }
  
    
  ngOnInit() {


 // Definering til preview af formular/post
 const form = document.getElementById('myForm') as HTMLFormElement;
 const titleInput = form.querySelector('#titleInput') as HTMLInputElement;
 const bodyInput = form.querySelector('#bodyInput') as HTMLTextAreaElement;
 const imageInput = form.querySelector('#imageInput') as HTMLInputElement;
 const categoryInput = form.querySelector('#categoryInput') as HTMLSelectElement;
 const preview = document.getElementById('preview') as HTMLDivElement;
 const previewTitle = preview.querySelector('#previewTitle') as HTMLHeadingElement;
 const previewBody = preview.querySelector('#previewBody') as HTMLParagraphElement;
 const previewImage = preview.querySelector('#previewImage') as HTMLImageElement;
 const previewCategory = preview.querySelector('#previewCategory') as HTMLSelectElement;
 
 // Se efter changes i form fields
 titleInput.addEventListener('input', updatePreview);
 bodyInput.addEventListener('input', updatePreview);
 imageInput.addEventListener('input', updatePreview);
 categoryInput.addEventListener('input', updatePreview);
 preview
 
 function updatePreview() {
   // Hent værdier fra inputfelter
   const title = titleInput.value;
   const body = bodyInput.value;
   const image = imageInput.files;
   const category = categoryInput.value;
 
   // Hvis ingen img er uploaded skip 
   if (!image) return;
   const firstFile = image[0];
 
   // Lav objekt url til billede for at kunne vise i HTML
   const objectURL = URL.createObjectURL(firstFile);
 
   // Update preview til at vise de nye værdier, indsat i formularen
   previewTitle.innerHTML = title;
   previewBody.innerHTML = body;
   previewImage.src = objectURL;
   previewCategory.innerHTML = category;
 }
 ;

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
      // window.location.reload();
      const uploadData = new FormData();
      if (this.selectedFile) {
        uploadData.append('file', this.selectedFile, this.selectedFile.name);
      
      }
  
      this.http.post("http://localhost:3000/upload", uploadData).subscribe(response => {
        console.log(response);
      });
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
