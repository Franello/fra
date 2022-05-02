import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loggedUser } from '../models/loggedUser';

export interface AuthResponseData {
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private readonly onlyUser: loggedUser = new loggedUser('admin', 'root'); 

  constructor(private router: Router) { }

  authentication:boolean  = false;

    authenticationSuccess(loggedUser: loggedUser):boolean{
      if(this.checkCredentials(loggedUser)){
        this.router.navigate(['home'])
        this.authentication= true; 
        return true
      } 
      this.authentication = false; 
      return false; 
    }
      onlyUs(username:string, password:string){
        return username === this.onlyUser.getUser(),
                password === this.onlyUser.getPassword(); 
      }
      checkCredentials(loggedUser: loggedUser){
          return this.onlyUs(loggedUser.getUser(), loggedUser.getPassword())
      }
      
  logout() {
    this.authentication = false;
    this.router.navigate(['login']);
  }

  getIsAuthenticated(): boolean {
    return this.authentication
  }
}

