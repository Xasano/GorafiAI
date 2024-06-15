import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article | null = null;
  safeMp3 : SafeUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') || 'defaultId';
        return this.articleService.getArticleById(id);
      })
    ).subscribe({
      next: article => {
        this.article = article;
        this.loadAudio();
      },
      error: error => console.error('Erreur lors de la récupération de l\'article', error)
    });
  }

  getImageSrc(base64String: string): string {
    return `data:image/png;base64,${base64String}`;
  }

  loadAudio(): void {
    if (this.article) {
      const base64Audio = this.article.mp3;
      const binaryString = atob(base64Audio)
      const binaryLen = binaryString.length;
      const bytes = new Uint8Array(binaryLen);
  
      for (let i = 0; i < binaryLen; i++) {
        const ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
  
      const blob = new Blob([bytes], { type: 'audio/mp3' });
      const unsafeUrl = URL.createObjectURL(blob);
      // Bypass sanitization and assign the SafeUrl to a new property
      console.log(this.article.mp3);
      this.safeMp3 = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
    }
  }
}

