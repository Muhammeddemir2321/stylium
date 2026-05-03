import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TeamMember = { name: string; role: string; img: string };

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  team: TeamMember[] = [
    { name: 'Mert Kaya', role: 'Fade ve modern kesim uzmanı', img: 'assets/images/gallery/foto2.jpg' },
    { name: 'Emir Arslan', role: 'Sakal tasarımı ve sıcak havlu bakım', img: 'assets/images/gallery/foto3.jpg' },
    { name: 'Can Demir', role: 'Klasik kesim ve final styling', img: 'assets/images/gallery/foto4.jpg' },
  ];
}
