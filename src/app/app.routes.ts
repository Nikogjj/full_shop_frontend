import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsComponent } from './produits/produits.component';

export const routes: Routes = [
    {path:"",redirectTo:"accueil",pathMatch:'full'},
    {path:"accueil", component: AccueilComponent},
    {path:"home", redirectTo:"accueil", pathMatch:'full'},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path:"panier",component:PanierComponent},
    {path:"produits",component:ProduitsComponent},
    {path: "**", component:NotFoundComponent}
];
