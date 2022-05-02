import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
    private userUrl:any = 'https://jsonplaceholder.typicode.com/users'; 
   getUser(): Observable<User[]> {
      return this.http.get<User[]>(this.userUrl)
   }

   getUsersId(id: any):Observable<any> {
     const userUrl:any = `https://jsonplaceholder.typicode.com/users/${id}`;
     return this.http.get(userUrl)
   }
}


