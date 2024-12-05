import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DarkModeToggleComponent],
  template: `
    <div class="container">
      <header>
        <h1> User Dashboard</h1>
        <app-dark-mode-toggle></app-dark-mode-toggle>
      </header>
      <nav>
        <a routerLink="/users" routerLinkActive="active">👥 User List</a>
        <a routerLink="/add-user" routerLinkActive="active">➕ Add User</a>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cute User Management Dashboard';
}

