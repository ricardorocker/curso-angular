import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Dog } from '../Dog';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/dogs'

  constructor(private http: HttpClient) { }

  // Método para remover do db.json(API local)
  // remove(dogs: Dog[], dog: Dog) {
  //   return dogs.filter((d) => dog.name !== d.name);
  // }

  removeItem(id: number) {
    return this.http.delete<Dog>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Dog> {
    return this.http.get<Dog>(`${this.apiUrl}/${id}`);
  }
}
