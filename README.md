# Inventory Management System for Cake Shop

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Inventory Management System is a web-based application developed for a cake shop. The system allows administrators to manage inventory items across three categories: Cake Ingredients, Cake Tools, and Party Items. Users can view and search the inventory, place orders, and manage their accounts.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Features

### Admin Privileges
- Add Inventory: Admins can add new items to the inventory under any of the three categories.
- Delete Inventory Item: Admins can delete existing items from the inventory.
- View Inventory: Admins can view a complete list of all inventory items.
- Update Inventory: Admins can update details of existing inventory items.
- View Orders: Admins can view all orders placed by users.
- Download Reports: Admins can download inventory and order reports.

### User Privileges
- Sign Up: New users can create an account.
- View Inventory: Users can view the inventory items across all categories.
- Search Inventory: Users can search for specific items in the inventory.
- Order Items: Users can place orders for items from the inventory.

## Installation

### Backend (PHP & MySQL)
1. Clone the repository:
    git clone https://github.com/MishelLiyanage/InventoryManagementSystem.git

2. Backend is hosted.  
    git clone https://github.com/MishelLiyanage/InventoryManagementSystem-backend.git

### Frontend (Angular)
1. Install dependencies:
    npm install

2. Start the Angular development server:
    `ng serve` and Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
    - You can also run `npm start`. Both commands are configured

4. Click on the link to view the web page (Ctrl+Click on the link)

5. You also can view the hosted website from https://kln-ims.web.app/

## API Endpoints

### Authentication
- POST /api/auth/login - Authenticate a user.
- POST /api/auth/signup - Register a new user.

### Inventory
- GET /api/inventory - Get all inventory items.
- POST /api/inventory - Add a new inventory item (Admin only).
- PUT /api/inventory/{id} - Update an inventory item (Admin only).
- DELETE /api/inventory/{id} - Delete an inventory item (Admin only).

### Orders
- GET /api/orders - Get all orders (Admin only).
- POST /api/orders - Place a new order (User only).

## Technologies Used
- Frontend: Angular
- Backend: PHP
- Database: MySQL
- Styling: CSS

## Organization
Developed under the supervision of Department of Industrial Management


