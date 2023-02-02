import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  public listLanches: Array<{lanche: string, preco: string}> = [
    { lanche: "X-Salada", preco: "R$10,00" },
    { lanche: "X-Bacon", preco: "R$12,00" },
    { lanche: "Coxinha", preco: "R$8,00" }
  ]

}
