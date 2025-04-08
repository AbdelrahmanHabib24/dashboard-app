#  React + Next.js Dashboard

A **responsive admin dashboard** built with **Next.js**, **React**, **Tailwind CSS**, and **Redux Toolkit**. It includes **Firebase authentication**, a dynamic **user table**, and **chart visualization** using **Recharts**. The dashboard is optimized for both mobile and desktop views, and supports dark mode.

---

##  Tech Stack

- **Next.js 15 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit**
- **Firebase (Auth + Firestore)**
- **Recharts**

---

##  Features

- Firebase Authentication (Login / Logout)  
- Protected Routes  
- Dynamic User Table with:
- Sorting  
- Filtering  
- Pagination  
- Activity Chart (Line Chart using Recharts)  
- Dark Mode (stored in `localStorage`)  
- Fully Responsive Design  
- Modular and Clean Code Structure  

---

## Implementation Overview

- **Firebase** is used for authenticating users and retrieving user data.
- **Redux Toolkit** manages global state including sort, filter, and pagination logic.
- **Recharts** is used to display user activity through a line chart.
- **Tailwind CSS** ensures a modern, responsive UI.
- **Dark Mode** is handled via a custom `ThemeContext`, with preference saved in `localStorage`.

---

##  Getting Started

To run the project in development mode, follow these steps:

```bash
# 1. Clone the repository
git clone https://github.com/AbdelrahmanHabib24/dashboard-app
cd dashboard-app
# 2. Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
