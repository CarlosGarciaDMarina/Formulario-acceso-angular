import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';     

@Component({
  selector: 'app-formulario',
    standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    FormBuilder
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})

export class FormularioComponent {

  formularioPersonal: FormGroup;
  submittedData: { label: string; value: any}[] = [];

  constructor (    
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){
    this.formularioPersonal = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      nacionalidad: ['', Validators.required],
      altura: ['', Validators.required],
      peso: ['', Validators.required],
      stack: ['', Validators.required]
    });
  }

  get f() {return this.formularioPersonal.controls; }

  onSubmit():void{
    if (this.formularioPersonal.invalid) {
      this.formularioPersonal.markAllAsTouched();
      return;
    }
    const datos = this.formularioPersonal.value;

    this.submittedData = Object.entries(datos).map(
      ([key, val]) => ({
        label: this.formatLabel(key),
        value: val
      })
    );
  }

  private formatLabel(key: string): string {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }




}
