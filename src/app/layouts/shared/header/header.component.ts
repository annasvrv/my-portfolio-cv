import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../../../components/navigation/navigation.component';
import { SidebarMenuComponent } from '../../../components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'stb-header',
  imports: [NavigationComponent, SidebarMenuComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isOpen = false;

  toggleSidebarMenu() {
    this.isOpen = !this.isOpen;
  }
}
