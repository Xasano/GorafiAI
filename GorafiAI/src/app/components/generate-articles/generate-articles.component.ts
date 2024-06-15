import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { NgForm,FormsModule } from '@angular/forms';


@Component({
  selector: 'app-generate-articles',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './generate-articles.component.html',
  styleUrls: ['./generate-articles.component.css']
})
export class GenerateArticlesComponent {
  article: any;
  title?: string;
  author?: string;
  
  constructor(private articleService: ArticleService, private router: Router) {}

  generateArticle(form :NgForm): void {
    console.log('Génération de l\'article', form.value);
    this.articleService.generateArticle(form.value.title, form.value.author).subscribe({
      next: (article) => {
      // Redirect the user to the generated article page
      this.router.navigate(['/article', article._id]);
      },
      error: error => console.error('Erreur lors de la génération de l\'article', error)
    });
  }
}
