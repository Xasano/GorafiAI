import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles';
  constructor(private http: HttpClient) { }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }
}
