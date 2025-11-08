import { Component,Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-produit',
  imports: [CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {
  image_path="https://images.ctfassets.net/denf86kkcx7r/57uYN7JlyDtQ91KvRldrm9/0a0656983993f5e09c4daa0a4fd8f5e6/comment-punir-son-chat-91"

  afficherAlerte(){
    alert("Produit ajouté au panier");    
  }

  nom:string='Produit X'
  enStock:boolean=true;

  basculeStock() {
    this.enStock = !this.enStock;
  }

  @Output() ajoutAuPanier = new EventEmitter<string>(); // ✅ Déclaration de l’événement

  ajouterAuPanier() {
    this.ajoutAuPanier.emit(this.nom); // ✅ Émission de l’événement
  }

  @Input() nomProduit!: string;

  prix: number =148.525;

}
