import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})

/**
 * Public Home Component — primera página cuando no hay sesión
 */
export class HomeComponent {

  // set the current year
  year: number = new Date().getFullYear();

  isLoginModalOpen = false;

  openLoginModal(): void {
    this.isLoginModalOpen = true;
  }

  closeLoginModal(): void {
    this.isLoginModalOpen = false;
  }

}
