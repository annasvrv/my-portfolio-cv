import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainBannerComponent } from '../../components/main-banner/main-banner.component';

@Component({
  selector: 'stb-home',
  imports: [MainBannerComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
}
