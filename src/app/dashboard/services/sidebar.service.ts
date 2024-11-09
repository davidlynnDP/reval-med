import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
    
  private isSidebarOpen: WritableSignal<boolean> = signal(false);

  get sidebarState() {
    return this.isSidebarOpen();
  }

  toggleSidebar() {
    this.isSidebarOpen.update((open) => !open);
  }

  openSidebar() {
    this.isSidebarOpen.set(true);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}
