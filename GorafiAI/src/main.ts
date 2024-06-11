import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ArticlesComponent } from './app/components/articles/articles.component';

bootstrapApplication(ArticlesComponent, appConfig)
  .catch((err) => console.error(err));
