import { Component } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  nombrePersonajeIngresar: string = '';
  dataPersonaje: any;
  loading: boolean = false;
  errorMessage: string = '';
  sugerencias: string[] = [];

  constructor(private personajesService: PersonajesService) { }

  // Llamar a la API para obtener las sugerencias
  buscarSugerencias(): void {
    if (this.nombrePersonajeIngresar.trim() === '') {
      this.sugerencias = [];  // Si el input está vacío, no mostrar sugerencias
      return;
    }

    // Aquí puedes hacer una llamada a tu servicio para obtener las sugerencias
    this.personajesService.obtenerSugerencias(this.nombrePersonajeIngresar).subscribe(
      (data) => {
        this.sugerencias = data.results.map((personaje: any) => personaje.name);
      },
      (error) => {
        console.error('Error al obtener sugerencias', error);
        this.sugerencias = [];
      }
    );
  }

  // Seleccionar una sugerencia
  seleccionarSugerencia(sugerencia: string): void {
    this.nombrePersonajeIngresar = sugerencia;
    this.sugerencias = [];
  }


  // Función que se ejecuta cuando el formulario es enviado
  buscarPersonaje() {
    if (this.nombrePersonajeIngresar.trim() !== '') {
      this.loading = true; 
      this.personajesService.obtenerPersonajePorNombre(this.nombrePersonajeIngresar).subscribe(
        (data) => {
          this.loading = false; 
          this.dataPersonaje = data.results[0]; 
          this.errorMessage = '';  
        },
        (error) => {
          this.loading = false; 
          this.errorMessage = 'No se encontraron personajes con ese nombre.';  
          console.error(error); 
        }
      );
    }
  }
}
