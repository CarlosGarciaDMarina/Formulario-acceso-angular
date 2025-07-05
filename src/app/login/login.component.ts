import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';     

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    FormBuilder
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  loginError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });
  }

  get f() {return this.loginForm.controls; }

  onSubmit():void{

    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    const { username, password} = this.loginForm.value;
    if(this.authService.login(username, password)){
      this.loginError = false;
      console.log("Éxito")
      this.router.navigate(['/formulario']); 
    }else {
      console.log("Error");
    }

    console.log(this.loginForm.value);
  }

}
