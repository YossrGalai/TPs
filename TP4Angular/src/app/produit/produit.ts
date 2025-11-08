import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [CommonModule, FormsModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  produits = [
    { nom: 'Clavier mécanique', stock: 75 },
    { nom: 'Souris sans fil', stock: 45 },
    { nom: 'Casque audio', stock: 10 },
    { nom: 'Écran 24"', stock: 30 }
  ];

  getCouleur(stock: number): string {
    if (stock > 50) return 'green';
    if (stock >= 20 && stock <= 50) return 'orange';
    return 'red';
  }

  augmenterStock(produit: any) {
    produit.stock += 5;
  }

  diminuerStock(produit: any) {
    if (produit.stock > 0) produit.stock -= 5;
  }
}
