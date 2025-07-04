import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'stb-media-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.scss',
})
export class MediaListComponent {
  @Input() mediaLinks: { url: string; name: string; img: string }[] = [];
}
