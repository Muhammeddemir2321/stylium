import { Component } from '@angular/core';
import { SITE } from '../../../core/config/site.config';
import { buildWhatsAppUrl } from '../../../core/utils/whatsapp.util';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  templateUrl: './whatsapp-fab.component.html',
  styleUrl: './whatsapp-fab.component.scss'
})
export class WhatsappFabComponent {
  site = SITE;

  open(): void {
    const msg = `${this.site.brand} için randevu almak istiyorum.`;
    window.open(buildWhatsAppUrl(this.site.whatsappDigits, msg), '_blank', 'noopener,noreferrer');
  }
}
