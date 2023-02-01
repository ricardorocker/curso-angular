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

  remove(dogs: Dog[], dog: Dog) {
    return dogs.filter((d) => dog.name !== d.name);
  }

  getAll(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Dog> {
    return this.http.get<Dog>(`${this.apiUrl}/${id}`);
  }
}
