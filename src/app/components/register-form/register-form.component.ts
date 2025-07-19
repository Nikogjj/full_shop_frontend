import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  router = new Router()
  showPassword = false;
  isLoading = false;
  registerForm = new FormGroup({
  prenom: new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.pattern(/^[a-zA-ZÀ-ÿ\s-]+$/) // Lettres, accents, espaces et tirets uniquement
  ]),
  nom: new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.pattern(/^[a-zA-ZÀ-ÿ\s-]+$/) // Lettres, accents, espaces et tirets uniquement
  ]),
  email: new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) // Pattern email sécurisé
  ]),
  confirmEmail: new FormControl('', [
    Validators.required,
    Validators.email,
    () => this.emailMatchValidator()
  ]),
  motDePasse: new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/) // Au moins 1 majuscule 1 minuscule 1 chiffre
  ]),
  dateNaissance: new FormControl('', [
    Validators.required,
    () => this.dateValidator()
  ])
  });

  // Validator personnalisé pour empêcher les dates futures
  // Je veux que la date de naissance ne dépasse pas la date actuelle au moment
  // Ou le client s'inscrit
  dateValidator(): ValidationErrors | null {
    if (!this.registerForm?.get("dateNaissance")?.value) return null;
    // Récupère la date actuelle
    const today = new Date();
    // Récupère la date sélectionnée dans le formulaire
    const selectedDate = new Date(this.registerForm.get("dateNaissance")?.value!);

    // Réinitialise les heures pour comparer uniquement les dates
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    // si la date sélectionnée est dans le futur je return une erreur
    if (selectedDate > today) {
      return { dateFuture: true };
    }
    //si la date sélectionnée est dans le passé ou aujourd'hui je return null (pas d'erreur)
    return null;
  }

  // Validator personnalisé pour vérifier que les emails correspondent
  emailMatchValidator(): ValidationErrors | null {
    const email = this.registerForm?.get('email')?.value;
    const confirmEmail = this.registerForm?.get('confirmEmail')?.value;
    console.log('Email:', email, 'Confirm Email:', confirmEmail);
    if (email && confirmEmail && email != confirmEmail) {
      return { emailMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      
      // Simulation d'une requête d'inscription
      console.log('Données d\'inscription:', this.registerForm.value);
      
      // Ici vous ajouterez plus tard l'appel à votre service d'authentification
      setTimeout(() => {
        this.isLoading = false;
        // Redirection après inscription réussie
        // this.router.navigate(['/login']);
      }, 2000);
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      this.markFormGroupTouched();
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      control?.markAsTouched();
    });
  }
}
