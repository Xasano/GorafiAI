import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Article as ArticleModel } from '../../models/article'; // Rename imported Article class
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: ArticleModel[] = [
    {
      id: '1',
      titre: 'Nouvelle Tendance : Les Licornes Domestiques',
      resume: 'Les licornes sont la dernière tendance en matière d\'animaux de compagnie, avec des conseils sur l\'entretien, la nourriture et les accessoires pour ces créatures imaginaires.',
      photo: 'https://i.pinimg.com/originals/9b/d9/dd/9bd9dd2bfb0031d794f3d76cc43cb408.jpg',
      contenu: 'Détails sur les licornes domestiques...',
      auteur: 'Jane Doe',
      dateCreation: new Date(),
      mp3: 'path_to_some_audio.mp3'
    },
    {
      id: '2',
      titre: 'Tempete de boulette géantes à Pompei',
      resume: 'Suite à l\'irruption du volcan, des centaines de boulettes géantes sont tombées sur la ville.',
      photo: 'https://th.bing.com/th/id/R.78ade77b326bc5e0bfe04c2acae697a5?rik=r9Um8UFrv39Acg&riu=http%3a%2f%2fstatic.pix-geeks.com%2f2016%2f06%2ftempete-de-boulettes-geantes-59825-600x315.jpg&ehk=oFVbyT8nPQ%2boCwbqpKphDEu65FxIj%2fMLedU82GD6BxU%3d&risl=&pid=ImgRaw&r=0',
      contenu: 'Informations sur l\'incident météorologique unique...',
      auteur: 'John Smith',
      dateCreation: new Date(),
      mp3: 'path_to_another_audio.mp3'
    }
  ];

  ngOnInit() {
    // Initialization logic here
  }
}
