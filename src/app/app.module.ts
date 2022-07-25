import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routing";
import { AddproduitComponent } from './addproduit/addproduit.component';
import {FormsModule} from "@angular/forms";
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    AddproduitComponent,
    UpdateproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
