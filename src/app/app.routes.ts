import { Routes } from '@angular/router';
import { BrainiacsTableComponent } from './brainiacs-table/brainiacs-table.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home', 
  },
  {
    path: 'brainiacs-table',
    loadComponent: () =>
      import('./brainiacs-table/brainiacs-table.component').then(
        (m) => m.BrainiacsTableComponent
      ),
  },
];
