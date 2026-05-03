import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SITE } from '../../../core/config/site.config';
import { ServiceItem } from '../../../core/models/service.model';
import { buildWhatsAppUrl } from '../../../core/utils/whatsapp.util';

type IconKey = 'scissors' | 'razor' | 'combo';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  site = SITE;

  services: ServiceItem[] = [
    { name: 'Saç Kesimi', priceText: '₺450+', durationMin: 30, desc: 'Yüz hattına göre modern veya klasik kesim, yıkama ve son şekillendirme.' },
    { name: 'Sakal Bakımı', priceText: '₺300+', durationMin: 20, desc: 'Ustura çizgisi, sıcak havlu, yağ bakımı ve net sakal formu.' },
    { name: 'Saç + Sakal', priceText: '₺650+', durationMin: 45, desc: 'Tam bakım paketi: kesim, sakal, ense temizliği ve final styling.' },
  ];

  iconKey(index: number): IconKey {
    return (['scissors', 'razor', 'combo'] as IconKey[])[index % 3];
  }

  onCardMove(e: MouseEvent): void {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  onCardLeave(e: MouseEvent): void {
    const el = e.currentTarget as HTMLElement;
    el.style.removeProperty('--mx');
    el.style.removeProperty('--my');
  }

  openWhatsAppFor(serviceName: string): void {
    const msg = `${this.site.brand} için randevu almak istiyorum. Hizmet: ${serviceName}`;
    window.open(buildWhatsAppUrl(this.site.whatsappDigits, msg), '_blank', 'noopener,noreferrer');
  }

  trackByName(_: number, service: ServiceItem): string {
    return service.name;
  }
}
