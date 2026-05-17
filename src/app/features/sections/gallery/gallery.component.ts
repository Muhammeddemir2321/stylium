import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type GalleryCategory = 'all' | 'hair' | 'beard' | 'salon' | 'detail';

type GalleryFilter = {
  key: GalleryCategory;
  label: string;
};

type GalleryItem = {
  src: string;
  title: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  description: string;
};

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  activeCategory: GalleryCategory = 'all';
  selectedIndex: number | null = null;

  filters: GalleryFilter[] = [
    { key: 'all', label: 'Tümü' },
    { key: 'hair', label: 'Saç Kesimi' },
    { key: 'beard', label: 'Sakal' },
    { key: 'salon', label: 'Salon' },
    { key: 'detail', label: 'Detay' },
  ];

  items: GalleryItem[] = [
    {
      src: 'assets/images/gallery/foto1.jpg',
      title: 'Net fade geçişi',
      category: 'hair',
      categoryLabel: 'Saç Kesimi',
      description: 'Yüz hattına göre temiz geçiş ve doğal final şekillendirme.'
    },
    {
      src: 'assets/images/gallery/foto2.jpg',
      title: 'Klasik salon dokusu',
      category: 'salon',
      categoryLabel: 'Salon',
      description: 'Randevulu, sakin ve premium berber atmosferi.'
    },
    {
      src: 'assets/images/gallery/foto3.jpg',
      title: 'Sakal çizgisi',
      category: 'beard',
      categoryLabel: 'Sakal',
      description: 'Ustura netliği ve sıcak havlu bakımı sonrası keskin hat.'
    },
    {
      src: 'assets/images/gallery/foto4.jpg',
      title: 'Final styling',
      category: 'detail',
      categoryLabel: 'Detay',
      description: 'Kesimin son dokunuşunda parlaklık, hacim ve kalıcılık.'
    },
    {
      src: 'assets/images/gallery/foto5.jpg',
      title: 'Modern kesim',
      category: 'hair',
      categoryLabel: 'Saç Kesimi',
      description: 'Günlük kullanıma uygun modern form ve kontrollü hacim.'
    },
    {
      src: 'assets/images/gallery/foto6.jpg',
      title: 'Bakım masası',
      category: 'salon',
      categoryLabel: 'Salon',
      description: 'Steril ekipman ve düzenli çalışma alanı.'
    },
    {
      src: 'assets/images/gallery/foto1.jpg',
      title: 'Ense temizliği',
      category: 'detail',
      categoryLabel: 'Detay',
      description: 'Kesimi tamamlayan temiz ense ve kontur çizgisi.'
    },
    {
      src: 'assets/images/gallery/foto3.jpg',
      title: 'Sıcak havlu bakımı',
      category: 'beard',
      categoryLabel: 'Sakal',
      description: 'Sakal formunu yumuşatan, rahatlatan klasik bakım ritüeli.'
    },
    {
      src: 'assets/images/gallery/foto5.jpg',
      title: 'Doğal geçiş',
      category: 'hair',
      categoryLabel: 'Saç Kesimi',
      description: 'Üst formu koruyup yanlarda dengeli geçiş sağlayan kesim.'
    },
    {
      src: 'assets/images/gallery/foto4.jpg',
      title: 'Ürün dokunuşu',
      category: 'detail',
      categoryLabel: 'Detay',
      description: 'Mat veya parlak bitiş için doğru ürün uygulaması.'
    },
    {
      src: 'assets/images/gallery/foto2.jpg',
      title: 'Bekleme alanı',
      category: 'salon',
      categoryLabel: 'Salon',
      description: 'Randevu öncesi rahat ve düzenli salon deneyimi.'
    },
    {
      src: 'assets/images/gallery/foto6.jpg',
      title: 'Komple bakım',
      category: 'beard',
      categoryLabel: 'Sakal',
      description: 'Saç, sakal ve final şekillendirmenin birlikte tamamlandığı paket.'
    },
  ];

  get filteredItems(): GalleryItem[] {
    if (this.activeCategory === 'all') return this.items;
    return this.items.filter(item => item.category === this.activeCategory);
  }

  get selectedItem(): GalleryItem | null {
    if (this.selectedIndex === null) return null;
    return this.filteredItems[this.selectedIndex] ?? null;
  }

  setCategory(category: GalleryCategory): void {
    this.activeCategory = category;
    this.selectedIndex = null;
  }

  openDialog(index: number): void {
    this.selectedIndex = index;
  }

  closeDialog(): void {
    this.selectedIndex = null;
  }

  next(event?: Event): void {
    event?.stopPropagation();
    const total = this.filteredItems.length;
    if (this.selectedIndex === null || total === 0) return;
    this.selectedIndex = (this.selectedIndex + 1) % total;
  }

  previous(event?: Event): void {
    event?.stopPropagation();
    const total = this.filteredItems.length;
    if (this.selectedIndex === null || total === 0) return;
    this.selectedIndex = (this.selectedIndex - 1 + total) % total;
  }

  trackByTitle(_: number, item: GalleryItem): string {
    return `${item.title}-${item.category}`;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if (this.selectedIndex === null) return;

    if (event.key === 'Escape') this.closeDialog();
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.previous();
  }
}
