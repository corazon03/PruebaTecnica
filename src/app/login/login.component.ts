import { Component } from '@angular/core';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCard } from '@angular/material/card';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../loginService/login-service.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatTabsModule, MatFormField, MatLabel, MatError, ReactiveFormsModule, NgIf, MatInput, MatCard ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  registerForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })


  constructor(private fb: FormBuilder, private loginService: LoginServiceService) {
    
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const result = this.loginService.login(email as string, password as string);
      alert(result);
    }
  }
  onRegister() {
    if (this.registerForm.valid) {
      const { nombre, email, password } = this.registerForm.value;
      const result = this.loginService.register(email as string, password as string, nombre as string);
      alert(result);
    }
  }

}

