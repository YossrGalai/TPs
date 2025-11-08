import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {
  @Input() questionData: any;
  @Output() answered = new EventEmitter<{ question: any; isCorrect: boolean }>();

  onSelect(option: string) {
    if (this.questionData.answered) return;

    this.questionData.selected = option;
    this.questionData.answered = true;

    const isCorrect = option === this.questionData.reponse;
    this.answered.emit({ question: this.questionData, isCorrect });
  }
}
