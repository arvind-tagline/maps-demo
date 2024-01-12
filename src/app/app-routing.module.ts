import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleMapComponent } from './components/simple-map/simple-map.component';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';

const routes: Routes = [
  {
    path:'',
    component: SimpleMapComponent
  },
  {
    path:'leaflet',
    component: LeafletMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
