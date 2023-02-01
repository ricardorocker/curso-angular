import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Ricardo';
  age: number = 28;
  job = 'Desenvolvedor';
  hobbies = ['Correr', 'Estudar', 'Assistir'];
  car = {
    name: '350z',
    brand: 'Nissan'
  }

}
