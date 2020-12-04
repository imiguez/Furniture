import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Furniture } from './furniture-list/furniture';

const url = ''; // Aca iría el endpoint de la API de los muebles

@Injectable({
  providedIn: 'root'
})
export class FurnitureDataService {


  constructor(private http: HttpClient) { }

  public getAll(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(url).pipe(
      tap((furnitures: Furniture[]) => furnitures.forEach(furniture => furniture.quantity = 0))
    );
  }
}
