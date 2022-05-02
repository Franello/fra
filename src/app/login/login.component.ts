import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../services/auth.service';
import { loggedUser } from '../models/loggedUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }
  ngOnInit(): void {}
  invalidCredentials:boolean = false; 
    onSubmit(form: NgForm) {
    if(!form.valid){
        this.invalidCredentials = false; 
        return;
    }
    this.authenthic(form); 
  }

   authenthic(form:NgForm){
      const LoggedUser = new loggedUser(form.value.user, form.value.password); 
      if (!this.authService.authenticationSuccess(LoggedUser)) {
      this.snackBar.open(' E-mail e/o password non validi!!!' ,'Close',{duration: 3000} )
    }
}
 


}