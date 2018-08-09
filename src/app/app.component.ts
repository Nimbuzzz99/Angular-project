import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  private PI_check;
  private Skills_check;
  private Exp_check;
  private Loc_check;
  private Proj_check;
  private Train_check;
  private Acad_check;

  constructor() { 
    this.PI_check = false;
    this.Skills_check = false;
    this.Exp_check = false;
    this.Loc_check = false;
    this.Proj_check = false;
    this.Train_check = false;
    this.Acad_check = false;
  }

  ngOnInit() {
    
  }

  select_PI(){
    this.PI_check = true;
  }

  select_Skills(){
    this.Skills_check = true;
  }

  select_Exp(){
    this.Exp_check = true;
  }

  select_Loc(){
    this.Loc_check = true;
  }

  select_Proj(){
    this.Proj_check = true;
  }

  select_Train(){
    this.Train_check = true;
  }

  select_Academy(){
    this.Acad_check = true;
  } 

}
