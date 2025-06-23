# 🌍 TourZen - Ultimate Tour Package Booking Platform

Welcome to **TourZen** — your one-stop destination for discovering and booking incredible travel experiences. This is a full-stack, Firebase-authenticated, and MongoDB-powered MERN application where users can book, post, and manage tours seamlessly.

---

## 🔗 Live Website

**Frontend:** [TourZen Live Link](https://tourzen-b2ebf.web.app/)


---

## 🛠️ Tech Stack

**Frontend:**

* React 19
* React Router v7
* Tailwind CSS v4
* Firebase Authentication
* Axios
* SweetAlert2
* React Toastify
* Swiper.js
* Theme Toggle (Light/Dark)

**Backend:**

* Express.js
* MongoDB Atlas
* JWT (JSON Web Token)
* CORS, dotenv, and more

---

## 📁 Folder Structure (Frontend)

```
src/
├── api/
├── assets/
├── components/
├── hooks/
├── layouts/
├── pages/
├── provider/
├── router/
├── App.jsx
└── main.jsx
```

---

## 🧭 Routes Overview

### 🔓 Public Routes

* `/` → Home
* `/all-package` → View all packages
* `/details-package/:id` → Tour details
* `/about` → About Us
* `/tour-gide` → Tour Guide Info
* `/login` → Login page
* `/register` → Registration page
* `/terms` → Terms & Conditions
* `/privacy` → Privacy Policy
* `/*` → 404 Not Found

### 🔐 Private Routes (via Firebase + JWT)

* `/MyBookingsAllTours` → View all bookings
* `/MyBookingsPackages/:id` → Booking form
* `/dashboard` → Add a tour package
* `/dashboard/managePackage` → Manage posted packages
* `/dashboard/updateTour/:id` → Update a package
* `/dashboard/viewTour/:tour_Id` → View specific tour details

---

## 🔒 Authentication

* Firebase Email/Password Login
* Google Login
* Auth-protected routes using custom `PrivateRoute`
* JWT stored in `localStorage`

---

## 🖼️ Home Page

* Hero Banner with title, paragraph, and CTA button
* Featured Packages (6 tour cards)
* "Show All" button → leads to `/all-package`
* 2 additional sections for enhanced UI/UX (Testimonials, Why Choose Us, etc.)

---

## 📦 Tour Package Functionalities

### Add Tour Package (Private)

* Form fields:

  * Tour Name, Image
  * Duration, Price
  * Departure Location, Date, Destination
  * Contact No.
  * Guide Info auto-filled from Firebase
* Data saved to MongoDB via Express
* Success toast on submit

### Manage My Packages (Private)

* View list of posted tours
* Update/Delete with SweetAlert confirmation
* Update via modal or dedicated page

### My Bookings (Private)

* View all bookings made by the user
* Show tour name, guide info, location, date, and status
* Confirm status button

---

## 🔍 Search Functionality

* Search by package name or destination using MongoDB `$regex`

## 🌗 Theme Toggle

* Easily switch between light and dark modes

---

## ✅ Requirements Checklist

*

---

## 📦 Dependencies (From package.json)

```json
"@tailwindcss/vite": "^4.1.10",
"axios": "^1.10.0",
"firebase": "^11.9.1",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-icons": "^5.5.0",
"react-router": "^7.6.2",
"react-toastify": "^11.0.5",
"sweetalert2": "^11.22.0",
"swiper": "^11.2.8",
"tailwindcss": "^4.1.10"
```

---

## 🧪 Getting Started

```bash
git clone https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-anamolhasan
cd tourzen-client
npm install
npm run dev
```

---

## 🔐 .env Example

```
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_API_BASE_URL=http://localhost:3000
```

---

## 📃 License

This project is open-sourced under the MIT License.

---

## 👨‍💻 Developer

**Anamol Hasan**
📧 Email: [mdanamolhasan1998@gmail.com](mailto:mdanamolhasan1998@gmail.com)


---

**Thank you for checking out TourZen! Bon voyage 🚀**


