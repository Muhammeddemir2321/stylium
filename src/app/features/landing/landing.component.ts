import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { WhatsappFabComponent } from '../../shared/components/whatsapp-fab/whatsapp-fab.component';

import { HeroComponent } from '../sections/hero/hero.component';
import { AboutComponent } from '../sections/about/about.component';
import { ServicesComponent } from '../sections/services/services.component';
import { GalleryComponent } from '../sections/gallery/gallery.component';
import { TeamComponent } from '../sections/team/team.component';
import { ReviewsComponent } from '../sections/reviews/reviews.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent, FooterComponent, WhatsappFabComponent,
    HeroComponent, AboutComponent, ServicesComponent, GalleryComponent, TeamComponent, ReviewsComponent, ContactComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {}
