import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitserviceService} from "../service/produitservice.service";
import {Produit} from "../../model/produit";

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private apService: ProduitserviceService , private router: Router) { }
produit!: Produit;
  ngOnInit(): void {
    this.produit = new Produit();
    this.apService.findById(this.activatedRoute.snapshot.params['id']).subscribe(value => {
      this.produit = value;
    });
  }
  onSubmit() {
    console.log(this.produit);
    this.apService.putProduit(this.produit).subscribe(value => {
      console.log(this.produit);
      this.router.navigate(['../produits']);
    });
  }

}
