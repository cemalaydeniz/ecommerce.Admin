import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isNavOpened: boolean;

  onSidenavToggle(): void {
    this.isNavOpened = !this.isNavOpened;
  }
}
