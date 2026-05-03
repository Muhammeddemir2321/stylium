import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: string[] = [
    'assets/images/gallery/foto1.jpg',
    'assets/images/gallery/foto2.jpg',
    'assets/images/gallery/foto3.jpg',
    'assets/images/gallery/foto4.jpg',
    'assets/images/gallery/foto5.jpg',
    'assets/images/gallery/foto6.jpg',
  ];
}
