import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private urlApi = 'https://rickandmortyapi.com/api/character/'

  constructor(private http: HttpClient) { }
  //Obtiene personajes por nombres
  obtenerPersonajePorNombre(name: string): Observable<any> {
    const params = new HttpParams()
      .set('name', name);

    return this.http.get(this.urlApi, { params });
  }

  // Obtener sugerencias de personajes a medida que se escribe
  obtenerSugerencias(nombre: string): Observable<any> {
    return this.http.get<any>(`${this.urlApi}?name=${nombre}`);
  }
}
