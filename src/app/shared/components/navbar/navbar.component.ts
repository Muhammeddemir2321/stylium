import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, PLATFORM_ID, computed, inject, signal } from '@angular/core';

import { SITE } from '../../../core/config/site.config';
import { buildWhatsAppUrl } from '../../../core/utils/whatsapp.util';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  private destroyRef = inject(DestroyRef);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  site = SITE;
  logoSrc = this.site.logoSrc;
  theme: Theme = 'dark';
  activeId = 'home';
  menuOpen = false;

  private readonly storageKey = 'stylium-theme';
  private readonly typedTextSignal = signal('');
  private slogans: string[] = [];
  private sloganIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  waUrl = computed(() =>
    buildWhatsAppUrl(this.site.whatsappDigits, `${this.site.brand} için randevu almak istiyorum.`)
  );

  get typedText(): string {
    return this.typedTextSignal();
  }

  constructor() {
    if (this.isBrowser) this.initTheme();
    this.destroyRef.onDestroy(() => this.stopTypewriter());
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.initActiveSectionObserver();
    this.slogans = this.site.navSlogans.filter(text => text.trim().length);
    setTimeout(() => this.typewriterTick(), 260);
  }

  openWhatsApp(): void {
    if (!this.isBrowser) return;
    window.open(this.waUrl(), '_blank', 'noopener,noreferrer');
  }

  toggleTheme(): void {
    if (!this.isBrowser) return;
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.theme);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string): void {
    if (!this.isBrowser) return;
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onLogoError(): void {
    this.logoSrc = 'assets/images/logo/logo1.png';
  }

  private initTheme(): void {
    const saved = localStorage.getItem(this.storageKey) as Theme | null;
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)')?.matches ?? false;
    this.theme = saved ?? (prefersLight ? 'light' : 'dark');
    this.applyTheme(this.theme);
  }

  private applyTheme(theme: Theme): void {
    document.body.classList.toggle('theme-light', theme === 'light');
    localStorage.setItem(this.storageKey, theme);
  }

  private typewriterTick(): void {
    const current = this.slogans[this.sloganIndex] ?? this.site.navSlogan;
    this.charIndex += this.isDeleting ? -1 : 1;
    this.charIndex = Math.max(0, Math.min(this.charIndex, current.length));
    this.typedTextSignal.set(current.slice(0, this.charIndex));

    let delay = this.isDeleting ? 26 : 42;
    if (!this.isDeleting && this.charIndex === current.length) {
      this.isDeleting = true;
      delay = 1100;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.sloganIndex = (this.sloganIndex + 1) % this.slogans.length;
      delay = 320;
    }

    this.timer = setTimeout(() => this.typewriterTick(), delay);
  }

  private stopTypewriter(): void {
    if (!this.timer) return;
    clearTimeout(this.timer);
    this.timer = null;
  }

  private initActiveSectionObserver(): void {
    const ids = ['home', 'about', 'services', 'gallery', 'team', 'reviews', 'contact'];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) this.activeId = visible.target.id;
      },
      { threshold: [0.22, 0.38, 0.54], rootMargin: '-20% 0px -55% 0px' }
    );

    sections.forEach(section => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
