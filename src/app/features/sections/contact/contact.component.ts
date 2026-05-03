import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SITE } from '../../../core/config/site.config';
import { buildWhatsAppUrl } from '../../../core/utils/whatsapp.util';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  site = SITE;

  form = new FormBuilder().group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required]],
    service: ['Saç Kesim', [Validators.required]],
    date: [''],
    time: [''],
    note: ['']
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const msg =
`Merhaba! ${this.site.brand} için randevu almak istiyorum.
Ad: ${v.name}
Telefon: ${v.phone}
Hizmet: ${v.service}
Tarih/Saat: ${v.date || '-'} ${v.time || '-'}
Not: ${v.note || '-'}`;

    window.open(buildWhatsAppUrl(this.site.whatsappDigits, msg), '_blank', 'noopener,noreferrer');
  }
}
