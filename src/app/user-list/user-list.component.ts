import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-list">
      <h2>👥 User List</h2>
      <div *ngIf="loading" class="loading"></div>
      <table *ngIf="!loading">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td>🧑‍🦰 {{ user.name }}</td>
            <td>📧 {{ user.email }}</td>
           
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    });
  }
}

