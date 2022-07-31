import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenimageService {

  constructor(private http: HttpClient) {

  }
  sendCont(a:any){
    return this.http.get<Object>(a);

  }
}
