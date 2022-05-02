import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Photos} from '../models/photos'; 

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}
    private photosUrl = 'https://jsonplaceholder.typicode.com/photos'; 
   getPhotos(): Observable<Photos[]> {

      return this.http.get<Photos[]>(this.photosUrl)
   }
}

