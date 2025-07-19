import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Vérifie si un token de connexion est présent dans la BDD
   * @returns boolean
   */
  isConnected(){
    const token = localStorage.getItem("token")
    if (token != null) {
      return true
    }
    else{
      return false
    }
  }
}
