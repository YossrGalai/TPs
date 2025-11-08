import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './bienvenue/bienvenue';
import { Produit } from './produit/produit';
import { Utilisateur } from './utilisateur/utilisateur';
import { FormsModule } from '@angular/forms';
import { Panier } from './panier/panier';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Bienvenue,Produit,FormsModule,Utilisateur,Panier],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet3');
}
