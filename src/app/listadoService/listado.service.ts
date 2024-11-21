import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Response {
  status: string;
  total: string;
  books: Book[];
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  ITEMS_PER_PAGE = 7;
  loading = true;
  total = 0;
  libros: Book[] = [];
  paginatedLibros: Book[] = [];
  page = 1;

  constructor(private http: HttpClient) {}

  getBooks() {
    this.http.get<Response>('https://www.dbooks.org/api/recent').subscribe(lib => {
      this.total = Number(lib.total);
      this.libros = lib.books;
      this.updatePagination();
    });
  }

  private updatePagination() {
    const startIndex = (this.page - 1) * this.ITEMS_PER_PAGE;
    const endIndex = startIndex + this.ITEMS_PER_PAGE;
    this.paginatedLibros = this.libros.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.page * this.ITEMS_PER_PAGE < this.total) {
      this.page++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.updatePagination();
    }
  }
}
