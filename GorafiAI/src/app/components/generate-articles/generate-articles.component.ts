import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ArticleService } from '../../services/article.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-articles',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './generate-articles.component.html',
  styleUrls: ['./generate-articles.component.css']
})
export class GenerateArticlesComponent {
  article: any;
  
  constructor(private articleService: ArticleService, private router: Router) {
  } 
  generateArticle(titre: string, auteur: string): void {
    this.articleService.generateArticle(titre, auteur).subscribe({
      next: (article) => {
      // Redirect the user to the generated article page
      this.router.navigate(['/article', article._id]);
      },
      error: error => console.error('Erreur lors de la génération de l\'article', error)
    });
  }
}
