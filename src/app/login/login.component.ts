import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
