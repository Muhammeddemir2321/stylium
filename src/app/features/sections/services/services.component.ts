import { Component } from '@angular/core';
import { ServiceItem } from '../../../core/models/service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: ServiceItem[] = [
    { name: 'Saç Kesim', priceText: '₺—', durationMin: 30, desc: 'Kişiye özel modern / klasik kesim.' },
    { name: 'Sakal Tıraşı', priceText: '₺—', durationMin: 20, desc: 'Şekillendirme ve bakım.' },
    { name: 'Saç + Sakal', priceText: '₺—', durationMin: 45, desc: 'Komple bakım paketi.' },
  ];
}
