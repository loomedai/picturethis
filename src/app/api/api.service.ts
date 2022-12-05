import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:3000/posts';

  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }
}
