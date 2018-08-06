import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatInputModule , MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
   MatListModule, MatCardModule, MatGridListModule, MatDividerModule} from '@angular/material';


import { AppComponent } from './app.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, MatFormFieldModule,
    BrowserAnimationsModule, MatInputModule,MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
