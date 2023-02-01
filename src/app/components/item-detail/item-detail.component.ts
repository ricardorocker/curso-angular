import { ListService } from './../../services/list.service';
import { Dog } from 'src/app/Dog';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  dog?: Dog;

  constructor(
    private listservice: ListService,
    private route: ActivatedRoute
  ) {
    this.getDog();
  }

  getDog() {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.listservice.getItem(id)
      .subscribe((dog) => (this.dog = dog))
  }

}
