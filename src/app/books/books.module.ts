import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import {BooksRoutingModule} from './books-routing.module';
import {BooksComponent} from './books.component';
import {BookListComponent} from '../book-list/book-list.component';
import {BookDetailsComponent} from '../book-details/book-details.component';
import {BookService} from '../book.service';
import {BookAddingComponent} from '../book-adding/book-adding.component';
import * as fromBooks from '../store/book/books.reducer';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
        StoreModule.forFeature(fromBooks.booksFeatureKey, fromBooks.bookReducer),
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        BookListComponent, BookDetailsComponent,
        BookAddingComponent, BooksComponent
    ],
    providers: [
        BookService
    ]
})
export class BooksModule {
}
