import { Component } from '@angular/core';
import { Student } from './TypeStudent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-etudiant',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etudiant : Student={
    id:1,
    name: 'Ali ',
    lastname: 'Ben Saleh',
    average:0.85
  }

  prixFormation = 2500;
  dateInscription = new Date(2025, 10, 6);
}
