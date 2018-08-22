import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userProfile;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getByUsername(username:string){
    this.userService.getByUsername(username).subscribe(user =>{
     this.userProfile= user
    })
    
  }
}
