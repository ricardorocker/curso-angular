import { Injectable } from '@angular/core';

import { Dog } from '../Dog';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(dogs: Dog[], dog: Dog) {
    return dogs.filter( (d) => dog.name !== d.name);
  }
}
