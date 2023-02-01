import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  dogs = [
    {name: "Belinha", type: "Puddle"},
    {name: "Bolt", type: "Husky"},
    {name: "Zóio", type: "Chiwawa"},
  ]

}
