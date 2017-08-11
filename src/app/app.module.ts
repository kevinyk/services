import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LectureComponent } from './lecture/lecture.component';

import { HttpService } from './http.service';



@NgModule({
  declarations: [
    AppComponent,
    LectureComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
