import { Component } from '@angular/core';
import { SITE } from '../../../core/config/site.config';
import { buildWhatsAppUrl } from '../../../core/utils/whatsapp.util';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  site = SITE;

  openWhatsApp(): void {
    const msg = `Merhaba! ${this.site.brand} için randevu almak istiyorum.`;
    window.open(buildWhatsAppUrl(this.site.whatsappDigits, msg), '_blank', 'noopener,noreferrer');
  }
}
