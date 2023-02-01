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
    // Lógica de remoção de item do db.json(API local)
    // this.dogs = this.listService.remove(this.dogs, dog);

    // Excluir no back
    this.listService.removeItem(dog.id).subscribe();

    // Excluir na view
    this.dogs = this.dogs.filter((d) => d.name !== dog.name );
  }

  getDogs(): void {
    this.listService.getAll().subscribe((dogs) => (this.dogs = dogs));
  }

}
