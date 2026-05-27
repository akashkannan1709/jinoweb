# Jino Web

A sports turf booking website built with React, Tailwind, Vite, and a Node/Express/MongoDB backend.

## Project Structure

- `user/` - React frontend and mobile web app
- `server/` - Node.js backend API

## Features

- Modern landing page experience
- Turf booking UI with premium amenities display
- Authentication and protected routes
- Pricing and contact pages
- Backend user management with bookings support

## Stack

### Frontend

- React 18
- Vite
- Tailwind CSS + DaisyUI
- Redux Toolkit
- React Router v6
- React Hook Form + Yup
- Capacitor support for Android

### Backend

- Node.js + Express
- MongoDB via Mongoose
- JWT authentication
- Razorpay integration
- File uploads with Cloudinary

## Setup

### 1. Install dependencies

```bash
cd "d:\jino Web\user"
npm install

cd "d:\jino Web\server"
npm install
```

### 2. Run the frontend

```bash
cd "d:\jino Web\user"
npm run dev
```

### 3. Run the backend

```bash
cd "d:\jino Web\server"
npm run server
```

## Build Frontend

```bash
cd "d:\jino Web\user"
npm run build
```

## Notes

- Configure backend environment variables in `server/.env` before starting the server.
- The frontend may require the backend API URL to be updated in Axios or environment settings.
- The repository is structured to keep frontend and backend code separate for easier development.

## Useful Commands

```bash
# Frontend
cd "d:\jino Web\user"
npm run dev
npm run build
npm run preview

# Backend
cd "d:\jino Web\server"
npm run server
npm start
```

## Git

```bash
git status
git add .
git commit -m "Add README"
git push origin main
```
