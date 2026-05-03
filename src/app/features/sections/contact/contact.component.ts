import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    service: ['Saç Kesimi', [Validators.required]],
    date: [''],
    time: [''],
    note: ['']
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const msg = `Merhaba! ${this.site.brand} için randevu almak istiyorum.
Ad: ${value.name}
Telefon: ${value.phone}
Hizmet: ${value.service}
Tarih/Saat: ${value.date || '-'} ${value.time || '-'}
Not: ${value.note || '-'}`;

    window.open(buildWhatsAppUrl(this.site.whatsappDigits, msg), '_blank', 'noopener,noreferrer');
  }
}
