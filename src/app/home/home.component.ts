import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../models/users';
import {PhotoService} from '../services/photo.service'; 
import {Photos} from '../models/photos'; 
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/comments';
import { Album } from '../models/albums';
import { AlbumService } from '../services/album.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Observable} from 'rxjs';
import { newArray } from '@angular/compiler/src/util';
import { DataType } from '../models/loggedUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  
  
  
  

  constructor(
    private userService: UserService, 
    private photoService: PhotoService,
    private commentService: CommentService, 
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService) { }

  loadUsers:User[]=[]; 
  
  loadPhotos:Photos[]=[];

  filtredPhotos:any[]= []; 

  loadComments: Comment[]=[]; 

  loadAlbums:Album[]=[];

  lists:any[]= [];

  isDetailOpen: boolean =false ; 

  selectedData: any;

  selectedDataType: DataType = 0;

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      users => {this.loadUsers= users}
    )

    this.photoService.getPhotos().subscribe(
      photos => {this.loadPhotos = photos}
    )
    
    this.commentService.getComments().subscribe(
      comments => {this.loadComments = comments}
    )
    this.albumService.getAlbum().subscribe(
      album =>{this.loadAlbums=album}
      )
      
      
      this.filtredPhotos = this.loadPhotos.slice(0, 20); 

    this.lists = this.getAllValues(); 

  
    }
  
  setUserToLocalStorage(i:number){
      this.localStorageService.setToLocalStorage(this.loadUsers[i].name, this.loadUsers[i])
  }
  setAlbumToLocalStorage(y:number){
      this.localStorageService.setToLocalStorage(this.loadAlbums[y].title, this.loadAlbums[y])
  }
  setCommentToLocalStorage(x:number){
      this.localStorageService.setToLocalStorage(this.loadComments[x].name, this.loadComments[x])
  }
  setPhotoToLocalStorage(z:number){
      this.localStorageService.setToLocalStorage(this.loadPhotos[z].title, this.loadPhotos[z])
  }
  
   getAllValues(): Array<any>
{
  var list = new Array<any>();
  for (var i = 0; i < localStorage.length;i++)
  {
    var key: any = localStorage.key(i);
    var value = localStorage.getItem(key);
    if(value){
        var parsedValue = JSON.parse(value)
    }
    list.push(parsedValue);
  }
  return list;
} 

  showDetail(data: any, dataType: DataType) {
    this.selectedData = data;
    this.selectedDataType = dataType;
    this.isDetailOpen= true; 
  }


  }






