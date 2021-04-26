import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookListComponent } from './book-list/book-list.component';
import { RequestService } from './request.service';
import {BooksFeatureState} from "./store/book/books.reducer";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "./environments/environment";
import {InMemoryBookService} from "./in-memory-db/in-memory-book.service";
import {StoreModule} from "@ngrx/store";
import {AppRoutingModule} from "./app-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

export interface AppState {
  bookFeature: BooksFeatureState;
}

let HttpClientInMemoryWebApiModule;

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule,
    environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forRoot(InMemoryBookService) : [],
    StoreModule.forRoot({}),
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule],
  declarations: [ AppComponent, HelloComponent, BookListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RequestService]
})
export class AppModule { }
