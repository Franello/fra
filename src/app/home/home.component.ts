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

  loadComments: Comment[]=[]; 

  loadAlbums:Album[]=[];

  isDetailOpen: boolean =false ; 

  selectedData: any;

  selectedDataType: DataType = 0;

  listOfUsers:any[]=[]; 

  listOfPhotos:any[]= []; 
  
  listOfComments:any[]= []; 

  listOfAlbums:any[]= []; 

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

    this.listOfUsers = this.localStorageService.getToLocalStorage("user"); 
    
    this.listOfPhotos = this.localStorageService.getToLocalStorage("photo"); 

    this.listOfComments = this.localStorageService.getToLocalStorage("comment");

    this.listOfAlbums = this.localStorageService.getToLocalStorage("album") ; 
  
    }
  
  setUserToLocalStorage(i:number){
      this.localStorageService.setToLocalStorage("user", this.loadUsers[i])
  }
  setAlbumToLocalStorage(y:number){
      this.localStorageService.setToLocalStorage("album", this.loadAlbums[y])
  }
  setCommentToLocalStorage(x:number){
      this.localStorageService.setToLocalStorage("comment", this.loadComments[x])
  }
  setPhotoToLocalStorage(z:number){
      this.localStorageService.setToLocalStorage("photo", this.loadPhotos[z])
  }

  getAllFromLocalStorage(){
    this.listOfAlbums;
    this.listOfComments;
    this.listOfPhotos;
    this.listOfUsers; 
  }
  showDetail(data: any, dataType: DataType) {
    this.selectedData = data;
    this.selectedDataType = dataType;
    this.isDetailOpen= true; 
  }
  }






