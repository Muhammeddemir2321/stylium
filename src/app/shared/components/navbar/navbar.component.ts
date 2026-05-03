import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../core/config/site.config';
import { buildWhatsAppUrl } from '../../../core/utils/whatsapp.util';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  site = SITE;

  private readonly storageKey = 'stylium-theme';
  theme: Theme = 'dark';

  waUrl = computed(() =>
    buildWhatsAppUrl(this.site.whatsappDigits, `${this.site.brand} için randevu almak istiyorum.`)
  );

  constructor() {
    this.initTheme();
  }

  openWhatsApp(): void {
    window.open(this.waUrl(), '_blank', 'noopener,noreferrer');
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.theme);
  }

  private initTheme(): void {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem(this.storageKey) as Theme | null;
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)')?.matches ?? false;

    this.theme = saved ?? (prefersLight ? 'light' : 'dark');
    this.applyTheme(this.theme);
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;

    document.body.classList.toggle('theme-light', theme === 'light');
    localStorage.setItem(this.storageKey, theme);
  }
}
