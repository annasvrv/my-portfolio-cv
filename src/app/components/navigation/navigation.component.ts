import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hrb-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navLinks$: Observable<{ url: string; name: string }[]> = of([
    { url: '/home', name: 'Home' },
    { url: '/about', name: 'About' },
    { url: '/projects', name: 'Projects' },
    { url: '/contact', name: 'Contact' },
  ]);
}
