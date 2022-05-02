import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DetailService{
      private detailSource = new BehaviorSubject<boolean>(false);
      currentValue = this.detailSource.asObservable();
      constructor(){
      } 
      changeDetail(value:boolean){
            this.detailSource.next(value)
      }

}