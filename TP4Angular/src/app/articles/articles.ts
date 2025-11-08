import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-articles',
  imports: [FormsModule ,CommonModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  //articles: { titre: string; contenu: string }[] = [];

  articles = [
    { titre: 'Angular 17 est sorti !', contenu: 'Découvrez les nouveautés.', importance: 'élevée' },
    { titre: 'Bases de TypeScript', contenu: 'Apprenez les fondamentaux.', importance: 'moyenne' },
    { titre: 'RxJS simplifié', contenu: 'Les Observables en pratique.', importance: 'faible' }
  ];

  nouveauTitre:string='';
  nouveauContenu:string='';
  nouvelleImportance:string='faible'

  ajouterArticle(){
    this.articles.push({titre:this.nouveauTitre,contenu:this.nouveauContenu,importance:this.nouvelleImportance});
  
    this.nouveauTitre = '';
    this.nouveauContenu = '';
    this.nouvelleImportance='faible';
  }
}
