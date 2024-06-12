import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule  } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  articleId: string = '';
  article: Article = {
    id: 'defaultId',
    titre: 'Lorsque Luffy apprend que Macron dissoud l\'assemblé',
    resume: 'Suite à la prise de parole de Macron Luffy tira une de cest tete',
    photo: 'https://wallpaperaccess.com/full/5666772.jpg',
    contenu: 'Description détaillée de l\'événement.',
    auteur: 'Nom de l\'auteur',
    dateCreation: new Date(),  
    mp3: 'path_to_audio_file.mp3'
  };

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('id') || 'defaultId';
    this.articleService.getArticleById(this.articleId).subscribe(
      article => this.article = article,
      error => {
        console.error('Erreur lors de la récupération de l\'article', error);
      }
    );
  }
}
