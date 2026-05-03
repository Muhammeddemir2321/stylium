import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type TeamMember = { name: string; role: string; img: string; };

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  team: TeamMember[] = [
    { name: 'Usta 1', role: 'Berber', img: 'assets/images/team/usta1.jpg' },
    { name: 'Usta 2', role: 'Stilist', img: 'assets/images/team/usta2.jpg' },
    { name: 'Usta 3', role: 'Sakal Uzmanı', img: 'assets/images/team/usta3.jpg' },
  ];
}
