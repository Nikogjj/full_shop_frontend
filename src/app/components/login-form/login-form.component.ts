import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  router = new Router();
  showPassword = false;
  isLoading = false;
  loginForm = new FormGroup({
    email: new FormControl('', 
      [
        Validators.required, 
        Validators.email
      ]),
    password: new FormControl('', 
      [
      Validators.required, 
      Validators.minLength(6)
      ]),
  })


  // ngOnInit(): void {
  // }



  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      
      // Simulation d'une requête de connexion
      console.log('Données de connexion:', this.loginForm.value);
      
      // Ici vous ajouterez plus tard l'appel à votre service d'authentification
      setTimeout(() => {
        this.isLoading = false;
        // Redirection après connexion réussie
        // this.router.navigate(['/accueil']);
      }, 2000);
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      // this.markFormGroupTouched();
      this.loginForm.markAllAsTouched();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigateToRegister() {
    this.router.navigate(["register"]);
  }

  // markFormGroupTouched() {
  //   // Object.keys(this.loginForm.controls).forEach(key => {
  //   //   const control = this.loginForm.get(key);
  //   //   control?.markAsTouched();
  //   // });
  //   // this.loginForm.markAllAsTouched();
  // }
}
