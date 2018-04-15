import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthorsService } from './authors.service';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
