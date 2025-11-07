import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utilisateur } from './utilisateur/utilisateur';
import { FormsModule } from '@angular/forms';
import { Profil } from './profil/profil';
import { AdresseComponent } from './adresse/adresse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Utilisateur , Profil,AdresseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet2');
}
