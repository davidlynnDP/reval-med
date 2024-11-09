import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenuItem, APP_ROUTES } from '../../routes';

@Component({
  selector: 'dashboard-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);
  public menuItems: MenuItem[] = [];
  public isDropdownOpen: WritableSignal<boolean> = signal(false);

  private getCurrentAppPath(): string {
    const dashboardChildRoute = this.route.snapshot.firstChild?.url[0]?.path;
    return dashboardChildRoute || '';
  }

  ngOnInit() {
    const appPath = this.getCurrentAppPath();
    this.menuItems = APP_ROUTES[appPath] || [];
  }

  toggleDropdown() {
    this.isDropdownOpen.update((open) => !open);
  }

}
