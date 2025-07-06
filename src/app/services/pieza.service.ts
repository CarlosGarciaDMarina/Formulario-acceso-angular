import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definimos una interfaz igual a PiezaDTO
export interface Pieza {
  id: number;
  nombre: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class PiezaService {

  private apiUrl = 'http://localhost:5197/api/piezas';

  constructor(private http: HttpClient) { }

  getPiezas(): Observable<Pieza[]> {
    return this.http.get<Pieza[]>(this.apiUrl);
  }

}

