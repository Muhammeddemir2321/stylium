import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Review = { name: string; title: string; text: string; };

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews: Review[] = [
    { name: 'Müşteri 1', title: 'Saç Kesim', text: 'Çok temiz, hızlı ve tam istediğim gibi oldu.' },
    { name: 'Müşteri 2', title: 'Saç + Sakal', text: 'Sakal şekillendirme efsane. Tekrar geleceğim.' },
    { name: 'Müşteri 3', title: 'Çocuk Kesim', text: 'Çocukla çok iyi ilgilendiler, çok memnun kaldık.' },
  ];

  stars = [1,2,3,4,5];
}
