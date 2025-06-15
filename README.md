# Vite + MERN Client Folder Structure

## 📁 Folder Structure

```bash
client/
├── public/
│   └── index.html              # Vite entry HTML
│
├── src/
│   ├── api/
│   │   ├── axiosInstance.js     # Axios setup with baseURL, interceptors
│   │   ├── tourService.js       # Tour-related API functions
│   │   └── bookingService.js    # Booking-related API functions
│
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── Loader.js
│   │   │   └── ThemeToggle.js
│   │   ├── ui/
│   │   │   ├── Card.js
│   │   │   ├── Button.js
│   │   │   └── Modal.js
│
│   ├── context/
│   │   └── AuthProvider.js      # Provides auth state globally
│
│   ├── hooks/
│   │   ├── useAuth.js           # Custom hook for auth actions
│   │   └── useFetch.js          # Reusable fetch hook (optional)
│
│   ├── layouts/
│   │   └── MainLayout.js        # Contains Navbar + Footer + Outlet
│
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.js
│   │   ├── AllPackages/
│   │   │   └── AllPackages.js
│   │   ├── AddPackage/
│   │   │   └── AddPackage.js
│   │   ├── ManagePackages/
│   │   │   └── ManagePackages.js
│   │   ├── MyBookings/
│   │   │   └── MyBookings.js
│   │   ├── PackageDetails/
│   │   │   └── PackageDetails.js
│   │   ├── About/
│   │   │   └── About.js
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   └── NotFound/
│   │       └── NotFound.js
│
│   ├── router/
│   │   └── AppRouter.js         # All routes + private routes config
│
│   ├── services/
│   │   └── firebase.js          # Firebase init + auth helpers
│
│   ├── styles/
│   │   └── global.css           # Tailwind / custom styles
│
│   ├── utils/
│   │   └── helpers.js           # Small utility functions
│
│   ├── App.js                   # Main App component
│   └── main.js                  # Vite entry point
│
├── .env                         # VITE_ variables (API URLs, keys)
├── package.json
├── vite.config.js
└── README.md