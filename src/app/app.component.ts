import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserPI } from './userPI';
import { UserSkill } from './userSkill';
import { UserExp } from './userExp';
import { UserLocation } from './userLocation';
import { UserProject } from './userProject';
import { UserCertificates } from './userCertificates';
import { UserAcademy } from './userAcademy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  private newPost_PI ;
  private newPost_Skill ;
  private newPost_Exp ;
  private newPost_Loc ;
  private newPost_Project;
  private newPost_Certificates;
  private newPost_Academy;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.newPost_PI = new UserPI();
    this.newPost_Skill = new UserSkill();
    this.newPost_Exp = new UserExp();
    this.newPost_Loc = new UserLocation();
    this.newPost_Project = new UserProject();
    this.newPost_Certificates = new UserCertificates();
    this.newPost_Academy = new UserAcademy();
  }
  addPost_PI() {
    this.userService.addPost_PI(this.newPost_PI).subscribe(() => {
      console.log("posted");
    });
    }
  addPost_Skill() {
    this.userService.addPost_Skill(this.newPost_Skill).subscribe(() => {
      console.log("posted");
    });
    }
  addPost_Exp() {
    this.userService.addPost_Exp(this.newPost_Exp).subscribe(() => {
      console.log("posted");
    });
    }
  addPost_Location() {
    this.userService.addPost_Location(this.newPost_Loc).subscribe(() => {
      console.log("posted");
    });
    }
  addPost_Project() {
    this.userService.addPost_Project(this.newPost_Project).subscribe(() => {
      console.log("posted");
    });
    }
  addPost_Certificates() {
    this.userService.addPost_Certificates(this.newPost_Certificates).subscribe(() => {
      console.log("posted");
    });
    }
  addPost_Academy() {
    this.userService.addPost_Academy(this.newPost_Academy).subscribe(() => {
      console.log("posted");
    });
    }
}
