import { Routes } from '@angular/router';
import { BrainiacsTableComponent } from './brainiacs-table/brainiacs-table.component';

export const routes: Routes = [
  {
    path: 'brainiacs-table',
    loadComponent: () =>
      import('./brainiacs-table/brainiacs-table.component').then(
        (m) => m.BrainiacsTableComponent
      ),
  },
];
