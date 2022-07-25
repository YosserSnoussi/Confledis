import { Component, OnInit } from '@angular/core';
import {Produit} from "../../model/produit";
import {ProduitserviceService} from "../service/produitservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {


  produits!: Produit[];

  constructor(private produitService :ProduitserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }
  private getProduits() {
    this.produitService.getProduitsList().subscribe(data => {
      console.log(data);
      this.produits = data;
    });
  }
  updateProduit(id: any) {
    this.router.navigate(['updateproduit' , id]);
  }
  deleteProduit (id: number) {
    this.produitService.deleteProduit(id).subscribe(data => {
      console.log(data);
      this.getProduits();
    });

  }


}
