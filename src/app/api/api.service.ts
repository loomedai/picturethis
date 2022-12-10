import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    console.log(data,'createapi=>')
  return this._http.post(`${this.apiUrl}`,data);
}

  //Delete post

delete(id:any):Observable<any>
{
  let ids = id;
  return this._http.delete(`${this.apiUrl}/${ids}`)
}

//update data

updateData(data:any,id:any):Observable<any>
{
  let ids = id;
  return this._http.put(`${this.apiUrl}/${ids}`,data);
}

}

