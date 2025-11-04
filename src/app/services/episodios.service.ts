import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Episodio {
  id: number;
  name: string;
  episode: string;
  air_date:string;
}

@Injectable({
  providedIn: 'root',
})
export class EpisodiosService {
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  // Método para obtener los episodios
  obtenerEpisodios(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }
}
