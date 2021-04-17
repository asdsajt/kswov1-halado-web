import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { AuthorTable } from "./authors";
import { BookTable } from "./books";

@Injectable()
export class InMemoryBookService implements InMemoryDbService {
  constructor() {}

  createDB() {
    const db = {
      books: BookTable.books,
      authors: AuthorTable.authors
    };
    return db;
  }
}
