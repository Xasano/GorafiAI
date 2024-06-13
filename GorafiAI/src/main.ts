import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ArticlesComponent } from './app/components/articles/articles.component';
//import { HeaderComponent } from './app/components/header/header.component';
//import { FooterComponent } from './app/components/footer/footer.component';

bootstrapApplication(ArticlesComponent, appConfig)
  .catch((err) => console.error(err));
