import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taches',
  imports: [CommonModule, FormsModule],
  templateUrl: './taches.html',
  styleUrl: './taches.css',
})
export class Taches {
  taches = [
    { description: 'Faire les courses', statut: false, priorite: 'haute' },
    { description: 'Réviser Angular', statut: true, priorite: 'moyenne' },
    { description: 'Aller au sport', statut: false, priorite: 'basse' }
  ];

  basculerStatut(tache: any) {
    tache.statut = !tache.statut;
  }

  nouvelleDescription = '';
  nouvellePriorite = 'basse';

  ajouterTache() {
    if (this.nouvelleDescription.trim() !== '') {
      this.taches.push({
        description: this.nouvelleDescription,
        statut: false,
        priorite: this.nouvellePriorite
      });

      this.nouvelleDescription = '';
    }
  }
}
