import { Component,  EventEmitter,  Input,  OnInit, Output, ɵbypassSanitizationTrustUrl } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataType } from '../../models/loggedUser';
import { User } from '../../models/users';
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private commentService:CommentService, 
    private route: ActivatedRoute) { }

  @Input() receivedData: any;
  @Input() receivedDataType: DataType = 0;
  @Input() state: boolean= true; 
  @Output() detail = new EventEmitter<boolean>();

  ngOnInit(): void {

    console.log(this.receivedData, this.receivedDataType);
  }

  closeDetail(){
    this.state= false; 
    this.detail.emit(this.state)
    console.log(this.state);
    
  }
    
}
