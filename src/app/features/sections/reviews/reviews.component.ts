import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Review = { name: string; title: string; text: string };

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews: Review[] = [
    { name: 'Ahmet Y.', title: 'Saç Kesimi', text: 'Kesim çok temiz oldu. Özellikle geçişler ve final şekillendirme beklediğimden iyi çıktı.' },
    { name: 'Burak K.', title: 'Saç + Sakal', text: 'Randevu saatinde alındım, salon düzenli ve sonuç çok net. Sakal çizgisi gerçekten iyi.' },
    { name: 'Murat S.', title: 'Sakal Bakımı', text: 'Sıcak havlu ve bakım detayları salonu farklı hissettiriyor. Tekrar geleceğim.' },
  ];

  stars = [1, 2, 3, 4, 5];
}
