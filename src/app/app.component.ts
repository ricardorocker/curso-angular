import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Petrucia';
  userData = {
    email: 'petrucia.rocker@gmail.com',
    role: 'Admin'
  }

  title = '04-curso-angular';
}
