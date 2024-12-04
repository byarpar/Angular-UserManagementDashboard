# User Management Dashboard

## Overview
This project is a User Management Dashboard built with Angular. It allows users to view a list of users fetched from an API, add new users through a reactive form, and toggle between light and dark modes. The dashboard is designed to be responsive and user-friendly, following good UX practices.

## Features
- Fetch and display a list of users from an API.
- Add new users using a reactive form with validation.
- Toggle between light mode and dark mode.
- Responsive design for both desktop and mobile screens.
- Inline error messages for form validation.
- Visual feedback for user actions.

## Technologies Used
- Angular
- HTML/CSS
- Bootstrap (or any other CSS framework you choose)
- RxJS for handling asynchronous data
- LocalStorage for persisting theme preferences

## API Used
- User data is fetched from the following API:
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
  - Alternatively, you can use [Reqres](https://reqres.in/api/users)

## Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- Angular CLI (if developing locally)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-management-dashboard
