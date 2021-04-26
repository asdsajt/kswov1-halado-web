import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {BookService} from "../book.service";
import {select, Store} from "@ngrx/store";
import {selectBooks} from "../store/book/books.selector";
import {deleteBook, listBooks} from "../store/book/books.actions";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService,
              private store: Store) { }

  books$ = this.store.pipe(select(selectBooks));
  
  ngOnInit() {
    this.bookService.getBooks().subscribe(b => {
      this.store.dispatch(listBooks({books: b}));
    });
  }

  onDeleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(b => {
      this.store.dispatch(deleteBook({bookId}));
    });
  }


}
