import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-blue-300 p-6 shadow-md">
      <div
        class="container mx-auto px-4 py-3 flex justify-between items-center"
      >
        <div class="flex items-center">
          <button
            class="hamburger hamburger--spin"
            [class.is-active]="isMenuOpen"
            (click)="toggleMenu()"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <nav
          class="fixed top-16 left-0 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
          [class.translate-x-0]="isMenuOpen"
          [class.-translate-x-full]="!isMenuOpen"
        >
          <ul class="py-4">
            <li class="px-6 py-2 hover:bg-gray-100">
              <a href="#">Home</a>
            </li>
            <li class="px-6 py-2 hover:bg-gray-100">
              <a href="#">Blogs</a>
            </li>
            <li class="px-6 py-2 hover:bg-gray-100">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
