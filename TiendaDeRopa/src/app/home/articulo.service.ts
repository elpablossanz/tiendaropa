import { Injectable } from '@angular/core';
import { Articulo } from './articulo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticulo } from './articulo.interfaz';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  public obtenerArticulosRest(): Observable<IArticulo[]>{
    const urlEndPoint:string ="http://localhost:3001/Items";
    return this.http.get<IArticulo[]>(urlEndPoint);
  }
}


