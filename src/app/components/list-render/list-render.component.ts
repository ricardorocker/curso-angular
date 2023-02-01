import { Component } from '@angular/core';

import { Dog } from 'src/app/Dog';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  dogs: Dog[] = [];

  dogDetails = '';

  constructor(private listService: ListService) {
    this.getDogs();
  }

  showAge(dog: Dog): void {
    this.dogDetails = `O pet ${dog.name} tem ${dog.age} anos!`;
  }

  removeDog(dog: Dog): void {
    console.log('Removendo cachorro...');
    this.dogs = this.listService.remove(this.dogs, dog);
  }

  getDogs(): void {
    this.listService.getAll().subscribe((dogs) => (this.dogs = dogs));
  }

}
