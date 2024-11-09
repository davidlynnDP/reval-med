import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarService } from './services/sidebar.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent { 

  private sidebarService = inject(SidebarService);

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  get isSidebarOpen() {
    return this.sidebarService.sidebarState;
  }
  
}
