import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class LocalStorageService {
  
  
 

  constructor () {
   
  }
  
        setToLocalStorage(key:string,value:any) {
       let valueP = localStorage.getItem(key)|| '[]';
       if(valueP){
         var parsedV= JSON.parse( valueP);
       }
         parsedV.push(value)
            localStorage.setItem(key, JSON.stringify(parsedV))
      }


       getToLocalStorage(key:string){

        return JSON.parse(localStorage.getItem(key)|| '[]');
        } 
 }
