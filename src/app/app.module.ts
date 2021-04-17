import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookListComponent } from './book-list/book-list.component';
import { RequestService } from './request.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BookListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RequestService]
})
export class AppModule { }
