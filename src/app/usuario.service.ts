import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from './Libro.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/Prueba/rs/usuario'; // Reemplaza con la URL correcta de tu API

  constructor(private http: HttpClient) { }

  actualizarLibro(libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.apiUrl}`, libro);
  }
  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  guardarLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }
}