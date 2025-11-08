import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './bienvenue/bienvenue';
import { Articles } from './articles/articles';
import { Produit } from './produit/produit';
import { Taches } from './taches/taches';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Bienvenue,Articles , Produit,Taches],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet4');
}
