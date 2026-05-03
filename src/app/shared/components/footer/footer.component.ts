import { Component } from '@angular/core';
import { SITE } from '../../../core/config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  site = SITE;
  year = new Date().getFullYear();
}
