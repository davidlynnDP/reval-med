import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

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

  isSidebarOpen: WritableSignal<boolean> = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update((open) => !open);
  }
  
}
