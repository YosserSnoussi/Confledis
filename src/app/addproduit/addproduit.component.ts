import { Component, OnInit } from '@angular/core';
import {Produit} from "../../model/produit";
import {ProduitserviceService} from "../service/produitservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  produit: Produit = new Produit();

  constructor(private produitService :ProduitserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  saveProduit() {
    this.produitService.addProduit(this.produit).subscribe(data => {
        console.log(data);
        this.goToProduit();
      },
      error => console.log(error));

  }
  goToProduit() {
    this.router.navigate(['produits']);
  }
  onSubmit() {
    console.log(this.produit);
    this.saveProduit();
  }

}
