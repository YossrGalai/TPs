import { Component } from '@angular/core';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookList } from '../book-list/book-list';
import { BookForm } from '../book-form/book-form';
@Component({
  selector: 'app-book-container',
  imports: [FormsModule,CommonModule,BookForm,BookList],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})
export class BookContainer {
  livres: Book[] = [];

  categorie:any =["Roman", "Science", "Histoire", "Informatique", "Art", "Autres"];

  ajouterLivre(book: Book) {
    this.livres.push(book);
  }

  deleteBook(id:number){
    this.livres = this.livres.filter(book => book.id !== id);
  }

  selectedBook: any = null;
  isEditing: boolean = false;

  onEditReceived(book: any) {
    this.selectedBook = { ...book };
    this.isEditing = true;
  }

  onFormSubmit(updatedBook: any) {
    if (this.isEditing) {

      // trouver l’index du livre à modifier
      const index = this.livres.findIndex(l => l.id === updatedBook.id);

      if (index !== -1) {
        this.livres[index] = updatedBook; // mise à jour
      }

      // repasser en mode ajout
      this.selectedBook = null;
      this.isEditing = false;

    } else {
      // mode ajout
      this.livres.push(updatedBook);
    }
  }

  search: string = "";
  sortOption: string = "";

  filteredBooks() {
    let data = this.livres.filter(b =>
      b.title.toLowerCase().includes(this.search.toLowerCase())
    );

    if (this.sortOption === "category") {
      data = data.sort((a, b) => a.category.localeCompare(b.category));
    }

    if (this.sortOption === "available") {
      data = data.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }

    return data;
  }
}
