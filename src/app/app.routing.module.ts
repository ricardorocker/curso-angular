import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FormsComponent } from './components/forms/forms.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'ng-if', component: IfRenderComponent },
  { path: 'events', component: EventsComponent },
  { path: 'output', component: EmitterComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'forms', component: FormsComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {};
