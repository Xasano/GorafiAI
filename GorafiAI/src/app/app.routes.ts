// app.routes.ts
import { Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailComponent } from './components/articles/article-detail/article-detail.component';
import { TeamComponent } from './components/team/team.component';
import { GenerateArticlesComponent } from './components/generate-articles/generate-articles.component';

export const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'team', component: TeamComponent },
  { path: 'generate-articles', component: GenerateArticlesComponent }
];
