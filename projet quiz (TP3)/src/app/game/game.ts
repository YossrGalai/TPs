import { Component } from '@angular/core';
import { Question } from '../question/question';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-game',
  imports: [Question, CommonModule, RouterLink],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  score = 0;

  questions = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique',
      answered: false,
      selected: ''
    },
    {
      question: 'Quelle est la capitale de l’Algerie ?',
      options: ['Alger', 'Tunis', 'Tanja'],
      reponse: 'Alger',
      answered: false,
      selected: ''
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge'],
      reponse: 'Bleu',
      answered: false,
      selected: ''
    },
  ];

  onAnswered(event: { question: any; isCorrect: boolean }) {
    if (event.isCorrect) {
      this.score += 10;
    } else {
      this.score -= 5;
    }
  }

}
