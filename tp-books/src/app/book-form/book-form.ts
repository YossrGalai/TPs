import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
@Component({
  selector: 'app-book-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {
  
  @Input() book: any;
  @Input() isEditing: boolean = false;

  @Output() submitBook = new EventEmitter<Book>();

  ngOnChanges() {
    if (this.book  && this.isEditing) {
      this.livre = { ...this.book };
    }
  }

  livre: Book = new Book();
  lastId = 1;

  generateId() {
    return this.lastId++;
  }

  onSubmit(form: any) {
  if (form.valid) {

    if (!this.isEditing) {
      this.livre.id = this.generateId();
    }
    this.submitBook.emit({ ...this.livre }); // émet une copie
      form.resetForm();
      this.livre = new Book();

    form.reset();
    this.livre = new Book();
  }
}

}
