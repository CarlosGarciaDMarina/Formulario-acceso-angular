import { Component, OnInit } from '@angular/core';
import { PiezaService, Pieza } from '../../services/pieza.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-piezas',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './piezas.component.html',
  styleUrl: './piezas.component.css'
})
export class PiezasComponent implements OnInit {
  piezas: Pieza[] = [];
  errorMsg = '';

  constructor(private piezaService: PiezaService){}

  ngOnInit(): void {
      this.piezaService.getPiezas().subscribe({
        next: data => this.piezas = data,
        error: err => {
          this.errorMsg = 'Error al cargar piezas';
          console.error(err);
        }
      });
  }

}
