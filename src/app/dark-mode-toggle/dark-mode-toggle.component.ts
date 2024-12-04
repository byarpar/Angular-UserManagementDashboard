import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dark-mode-toggle">
      <label class="switch">
        <input type="checkbox" [checked]="isDarkMode" (change)="toggleDarkMode()">
        <span class="slider"></span>
      </label>
      <span>{{ isDarkMode ? '🌙' : '☀️' }} {{ isDarkMode ? 'Dark' : 'Light' }} Mode</span>
    </div>
  `,
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode: boolean;

  constructor() {
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
  }

  ngOnInit(): void {
    this.setTheme();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.setTheme();
  }

  private setTheme(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}

