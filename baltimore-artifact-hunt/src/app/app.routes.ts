import { Routes } from '@angular/router';
import { CityMapComponent } from './components/city-map/city-map.component';
import { LocationSceneComponent } from './components/location-scene/location-scene.component';

export const routes: Routes = [
  { path: '', component: CityMapComponent },
  { path: 'location/:locationId', component: LocationSceneComponent },
  { path: '**', redirectTo: '' },
];
