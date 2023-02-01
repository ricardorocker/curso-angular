import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 10);
  }

}
