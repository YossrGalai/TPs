import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() livres:Book[]=[];
  
  @Output() deleteBookEvent = new EventEmitter<number>();

  supprimer(id: number) {
    this.deleteBookEvent.emit(id);
  }

  @Output() edit = new EventEmitter<any>();

  onEditBook(book: any) {
    this.edit.emit(book);
  }
}
