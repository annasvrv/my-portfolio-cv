import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'stb-sidebar-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  isOpen = false;

  toggleSidebarMenu() {
    this.isOpen = !this.isOpen;
  }

  navLinks$: Observable<{ url: string; name: string }[]> = of([
    { url: '/home', name: 'Home' },
    { url: '/about', name: 'About' },
    { url: '/projects', name: 'Projects' },
    { url: '/contact', name: 'Contact' },
  ]);
}
