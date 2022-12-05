import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { CreatepostComponent } from '../createpost/createpost.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

// connect frontend and backend

  apiUrl = 'http://localhost:3000/posts';

  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }


  //create post

  CreateData(data:any):Observable<any>{
  return this._http.post(`${this.apiUrl}`,data);
}
}




