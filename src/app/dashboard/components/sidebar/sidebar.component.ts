import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES_SIDEBAR } from '../../routes';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'dashboard-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  private sidebarService = inject(SidebarService);
  public menuItems: [string, string][] = Object.entries(APP_ROUTES_SIDEBAR);

  get isSidebarOpen() {
    return this.sidebarService.sidebarState;
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }

}
