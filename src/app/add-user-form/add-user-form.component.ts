import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="add-user-form">
      <h2>➕ Add New User</h2>
      
      <div class="form-group">
        <label for="name">🧑‍🦰 Name:</label>
        <input type="text" id="name" formControlName="name" required>
        <div *ngIf="submitted && userForm.get('name')?.errors" class="error">
          Name is required
        </div>
      </div>

      <div class="form-group">
        <label for="email">📧 Email:</label>
        <input type="email" id="email" formControlName="email" required>
        <div *ngIf="submitted && userForm.get('email')?.errors" class="error">
          <div *ngIf="userForm.get('email')?.errors?.['required']">Email is required</div>
          <div *ngIf="userForm.get('email')?.errors?.['email']">Invalid email format</div>
        </div>
      </div>

      <div class="form-group">
        <label for="role">🎭 Role:</label>
        <input type="text" id="role" formControlName="role" required>
        <div *ngIf="submitted && userForm.get('role')?.errors" class="error">
          Role is required
        </div>
      </div>

      <button type="submit">✨ Add User</button>
    </form>
  `,
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe({
        next: (response) => {
          console.log('New user:', response);
          this.userForm.reset();
          this.submitted = false;
          alert('🎉 User added successfully!');
        },
        error: (error) => {
          console.error('Error adding user:', error);
          alert('❌ Error adding user. Please try again.');
        }
      });
    }
  }
}

