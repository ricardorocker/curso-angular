import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color = 'darkred';

  classes = [
    'green-title',
    'small-title'
  ];

  underline = 'underline-title';

}
