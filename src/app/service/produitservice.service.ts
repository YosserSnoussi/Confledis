import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Produit} from "../../model/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  private baseURL = 'http://localhost:8087/produit';

  private url = environment.webservice.baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getProduitsList(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.url + 'produit');

  }

  addProduit(produit: Produit): Observable<object> {
    return this.httpClient.post(this.url + 'produit', produit);
  }

  findById(id: any): Observable<any> {
    return this.httpClient.get(this.url + 'produit' + id);
  }

  putProduit(produit: Produit): Observable<object> {
    return this.httpClient.put(this.url + 'produit', produit);

  }

  deleteProduit(id: number): Observable<Object> {

    return this.httpClient.delete(this.url + 'produit/' + id);
  }
}
