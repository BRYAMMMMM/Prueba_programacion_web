import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Libro } from './Libro.module';
import { UsuarioService } from './usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  isEditMode: boolean = false; // Para controlar el modo de edición o creación
  libros?: Libro[];
  newLibro: Libro = { nombre: '', apellido: '', direccion: '', consumo: '', deuda: '' };
  modalSwitch:boolean=false;

  constructor(private libroService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }
openmoda(){

  this.modalSwitch=true;
}
  cargarLibros() {
    this.libroService.obtenerLibros().subscribe({
      next: (data: Libro[]) => this.libros = data,
      error: (error: any) => console.error('Error al eliminar cliente:', error)

    });
  }

 
  
  actualizarLibro() {
    this.libroService.actualizarLibro(this.newLibro).subscribe({
      next: (libroActualizado: any) => {
        console.log('Libro actualizado:', libroActualizado);
        this.cargarLibros(); // Actualiza la lista de libros después de la actualización
        this.resetForm(); // Reinicia el formulario
      },
      error: (error: any) => console.error('Error al actualizar libro:', error)
    });
  }
    
  
  createLibro(): void {
    this.libroService.guardarLibro(this.newLibro).subscribe((libro: Libro) => {
      this.libros?.push(libro);
      this.newLibro = { nombre: '', apellido: '', direccion: '', consumo: '', deuda: '' };
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.actualizarLibro();
    } else {
      this.createLibro();
    }
  }

  

  resetForm() {
    this.newLibro = { nombre: '', apellido: '', direccion: '', consumo: '', deuda: '' };
    this.isEditMode = false; // Cambia al modo de creación
  }

  seleccionarLibro(libro: Libro) {
    this.newLibro = { ...libro }; // Clona el objeto para evitar mutaciones directas
    this.isEditMode = true; // Cambia al modo de edición
  }

}
