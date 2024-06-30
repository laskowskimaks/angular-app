import {
  ApplicationConfig,
  NgModule,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(NgbModule),
    importProvidersFrom(NgbModal),
  ],
};
