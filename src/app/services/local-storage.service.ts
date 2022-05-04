import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Something { [ key: string ]: BehaviorSubject<any>; }
type serializable = object | Object;

@Injectable()
export class LocalStorageService {
  
  
  private something: Something;

  constructor () {
    this.something = Object.create( null );
  }
  value:any[]= [];
      
      setToLocalStorage<T extends serializable>(key:string , value:T): BehaviorSubject<T> {
          localStorage.setItem(key, JSON.stringify(value));  
           if ( this.something[ key ] ) {
            this.something[ key ].next( value );
            return this.something[ key ];
    }

            return this.something[ key ] = new BehaviorSubject( value );
      }


       getItem<T extends serializable>( key: string ): BehaviorSubject<T> {
       if ( this.something[ key ] ){
      return this.something[ key ];}
    else{
      return this.something[ key ] = new BehaviorSubject( JSON.parse( localStorage.getItem( key ) ||'{}' ) );}
      }
}

