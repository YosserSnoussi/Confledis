import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {ListProduitComponent} from "./list-produit/list-produit.component";
import {AddproduitComponent} from "./addproduit/addproduit.component";
import {UpdateproduitComponent} from "./updateproduit/updateproduit.component";



const routes: Routes = [
     { path: 'produits',             component: ListProduitComponent },
     { path: 'addproduit',     component: AddproduitComponent },
     { path: 'updateproduit/:id',           component: UpdateproduitComponent },
    // { path: 'landing',          component: LandingComponent },
    // { path: 'login',          component: LoginComponent },
    // { path: '', redirectTo: 'home', pathMatch: 'full' }
   // {path: '', component: LoginComponent},
    // {path: '**', component: LoginComponent}
     { path: '**', redirectTo: 'produits', pathMatch: 'full' } ,
    {
        path: 'main',
       // component: MainComponent ,
        children: [
           // { path: 'home',             component: HomeComponent },
           // { path: 'user-profile',     component: ProfileComponent },
            //{ path: 'register',           component: SignupComponent },
            //{ path: 'landing',          component: LandingComponent },
            // { path: 'login',          component: LoginComponent },
           // { path: '', redirectTo: 'home', pathMatch: 'full' },
            //{path: 'publicity', component: PublicityComponent},
            // {path: 'appointments', component: AppointmentComponent},
            //{path: 'addappointment', component: AddAppointmentComponent},
            // {path: 'reclamation', component: ReclamationComponent},
           // {path: 'addreclamation', component: AddreclamationComponent},
           // {path: 'calendar', component: CalendarComponent},
           // {path: 'update-appointment/:id', component: UpdateAppointmentComponent}

        ]
}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }
