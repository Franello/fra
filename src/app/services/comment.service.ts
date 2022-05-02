import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

 constructor(private http: HttpClient) {}
    private commentsUrl = 'https://jsonplaceholder.typicode.com/comments'; 
   getComments(): Observable<Comment[]> {

      return this.http.get<Comment[]>(this.commentsUrl)
   }
       getCommentsId(id: any):Observable<any> {
     const commentsUrl:any = `https://jsonplaceholder.typicode.com/comments/${id}`;
     return this.http.get(commentsUrl)
   }
}
