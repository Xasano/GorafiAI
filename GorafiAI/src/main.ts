import { bootstrapApplication } from '@angular/platform-browser';
import { ArticlesComponent } from './app/components/articles/articles.component';

import { provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(ArticlesComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withFetch())]
})
  .catch((err) => console.error(err));

