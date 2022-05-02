import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/albums';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) {}
    private albumUrl ='https://jsonplaceholder.typicode.com/albums';
    getAlbum():Observable<Album[]>{
      return this.http.get<Album[]>(this.albumUrl)
    }
}
