import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-bienvenue',
  imports: [CommonModule,FormsModule],
  templateUrl: './bienvenue.html',
  styleUrl: './bienvenue.css',
})
export class Bienvenue {
  isLoggedIn:boolean=false;
  prenom:string='';

  basculeconnecter(){

    //this.isLoggedIn=!this.isLoggedIn;

    if(this.prenom =='yossr'){
      this.isLoggedIn=true;
    }else{
      this.isLoggedIn=false;
      alert('Prénom incorrect !');
    }
    
  }
}
