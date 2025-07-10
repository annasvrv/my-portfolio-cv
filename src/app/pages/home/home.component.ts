import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainBannerComponent } from '../../components/main-banner/main-banner.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'hrb-home',
  imports: [MainBannerComponent, RouterModule, CtaBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
