import { Component } from '@angular/core';
import { EpisodiosService } from '../services/episodios.service';
import { NgFor, NgIf } from '@angular/common';


interface Episodio {
  id: number;
  name: string;
  episode: string;
  air_date:string;
}

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent {

  episodios: Episodio[] = []; 
  allEpisodios: Episodio[] = []; 
  isLoading: boolean = true;  
  currentPage: number = 1;    
  totalPages: number = 1;     

  constructor(private episodiosService: EpisodiosService){}


  ngOnInit(): void {
    this.cargarEpisodios(this.currentPage);
  }

  cargarEpisodios(page: number): void {
    this.isLoading = true;
    this.episodiosService.obtenerEpisodios(page).subscribe(
      (data) => {
        // Guardamos todos los episodios
        this.allEpisodios = data.results;
        this.totalPages = data.info.pages;  
        this.actualizarEpisodiosPagina(page); 
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener los episodios', error);
        this.isLoading = false;
      }
    );
  }

  // Actualizamos los episodios para la página actual, se mostrarán de 6 en 6
  actualizarEpisodiosPagina(page: number): void {
    const startIndex = (page - 1) * 6;  
    const endIndex = startIndex + 6;  
    this.episodios = this.allEpisodios.slice(startIndex, endIndex);  
  }

  // Ir a la siguiente página
  siguientePagina(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.actualizarEpisodiosPagina(this.currentPage);
    }
  }

  // Volver a la página anterior
  paginaAnterior(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.actualizarEpisodiosPagina(this.currentPage);
    }
  }
}
