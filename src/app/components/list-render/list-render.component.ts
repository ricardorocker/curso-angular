import { Component } from '@angular/core';

import { Dog } from 'src/app/Dog';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  dogs: Dog[] = [
    { name: "Belinha", type: "Puddle", age: 4 },
    { name: "Bolt", type: "Husky", age: 10 },
    { name: "Zóio", type: "Chiwawa", age: 5 },
  ]

  dogDetails = '';

  constructor(private listService: ListService) { }

  showAge(dog: Dog): void {
    this.dogDetails = `O pet ${dog.name} tem ${dog.age} anos!`;
  }

  removeDog(dog: Dog): void {
    console.log('Removendo cachorro...');
    this.dogs = this.listService.remove(this.dogs, dog);
  }

}
