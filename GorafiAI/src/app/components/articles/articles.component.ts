import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Article as ArticleModel } from '../../models/article'; // Rename imported Article class

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ArticleService } from '../../services/article.service'; // Import ArticleService


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor(private articleService: ArticleService) {}
  articles: ArticleModel[] = [];
  
  ngOnInit(): void {
    this.articleService.getArticles().subscribe((data: ArticleModel[]) => {
      this.articles = data;
    });
  }

  getImageSrc(base64String: string): string {
    return `data:image/png;base64,${base64String}`;
  }
}
