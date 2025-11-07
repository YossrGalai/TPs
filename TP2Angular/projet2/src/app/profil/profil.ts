import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
  utilisateur = {
    prenom: '',
    age: 0
  };
}
