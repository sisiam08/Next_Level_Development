# Vehicle Rental System

A comprehensive RESTful API backend for managing vehicle rentals, built with Node.js, Express, and TypeScript.

**GitHub Repo:** https://github.com/sisiam08/Next_Level_Development/tree/main/Assignments/Assignment_2

**Live Deployment:** https://vehiclerentalsystem-five.vercel.app/

GitHub Repo: Your GitHub Repo Link
Your Live Deployment Link

---

## Features

- **User Authentication & Authorization**

  - Secure user registration and login
  - JWT-based authentication
  - Role-based access control (Admin, User)
  - Password encryption with bcryptjs

- **Vehicle Management**

  - Browse and search available vehicles
  - Manage vehicle inventory
  - Filter vehicles by type and availability
  - Track vehicle status in real-time

- **Booking System**

  - Create and manage vehicle bookings
  - Check vehicle availability
  - Calculate rental costs
  - Booking history and tracking

- **User Management**

  - User profile management
  - View booking history
  - User role and permissions management

- **Database**
  - PostgreSQL for reliable data storage
  - Normalized database schema
  - Data integrity and security

---

## Technology Stack

- **Node.js** + **TypeScript** - JavaScript runtime with type-safe development
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication

---

## Setup & Usage Instructions

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm package manager

### Initialize the database

The database will be automatically created when the server starts via `createDB()` function.

### Running the Application

**Development Mode:**

```bash
npm run dev
```

The server will start and watch for file changes using tsx.

**Production Mode:**

```bash
npm start
```

### API Endpoints

#### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - User login

#### Vehicles

- `GET /api/v1/vehicles` - Get all vehicles
- `GET /api/v1/vehicles/:vehicleId` - Get vehicle details
- `POST /api/v1/vehicles` - Create new vehicle (Admin)
- `PUT /api/v1/vehicles/:vehicleId` - Update vehicle (Admin)
- `DELETE /api/v1/vehicles/:vehicleId` - Delete vehicle (Admin)

#### Users

- `GET /api/v1/users` - Get all users (Admin)
- `GET /api/v1/users/:userId` - Get user details
- `PUT /api/v1/users/:userId` - Update user profile
- `DELETE /api/v1/users/:userId` - Delete user (Admin)

#### Bookings

- `GET /api/v1/bookings` - Get all bookings
- `POST /api/v1/bookings` - Create new booking
- `GET /api/v1/bookings/:bookingId` - Get booking details
- `PUT /api/v1/bookings/:bookingId` - Update booking
- `DELETE /api/v1/bookings/:bookingId` - Cancel booking

---

## Project Structure

```
src/
├── app.ts              # Express application setup
├── server.ts           # Server entry point
├── config/
│   ├── db.ts           # Database configuration
│   └── index.ts        # Configuration exports
├── middleware/
│   └── auth.ts         # Authentication middleware
├── modules/
│   ├── authentication/ # User auth routes & controllers
│   ├── vehicle/        # Vehicle routes & controllers
│   ├── user/           # User routes & controllers
│   └── booking/        # Booking routes & controllers
├── helpers/
│   ├── available_status.ts
│   ├── userRole.ts
│   └── vehicles_type.ts
└── types/
    └── index.d.ts      # TypeScript type definitions
```

---

## Development Notes

- Built with TypeScript for type safety and better development experience
- RESTful API following industry best practices
- Modular architecture for scalability and maintainability
- Environment-based configuration for different deployment scenarios
- Deployed on Vercel for production availability
