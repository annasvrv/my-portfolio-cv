import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MediaListComponent } from '../../../components/media-list/media-list.component';

@Component({
  selector: 'hrb-footer',
  imports: [CommonModule, MediaListComponent, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  mediaLinks$: Observable<{ url: string; name: string; img: string }[]> = of([
    {
      url: 'https://www.linkedin.com/in/anna-svrv/',
      name: 'LinkedIn',
      img: 'linkedin',
    },
    {
      url: 'https://github.com/annasvrv',
      name: 'GitHub',
      img: 'github',
    },
    {
      url: 'https://www.instagram.com/anna_svrv/',
      name: 'Instagram',
      img: 'square-instagram',
    },
    {
      url: 'https://twitter.com/anna_svrv',
      name: 'X',
      img: 'twitter',
    },
  ]);
}
