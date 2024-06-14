import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})

export class ArticleService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/api/articles');
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/api/article/${id}`);
  }

  generateArticle(titre_article : string, auteur_article : string): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/api/generate-article', {
      "titre" : titre_article,
      "auteur" : auteur_article
    });
  }
}
