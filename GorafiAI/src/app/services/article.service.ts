import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article'; 

@Injectable({
  providedIn: 'root' 
})

export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles'; // URL API

  constructor(private http: HttpClient) {}
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }
}
