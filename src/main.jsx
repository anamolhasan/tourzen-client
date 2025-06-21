import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './router/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import ThemeProvider from './provider/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider >
       <AuthProvider>
        <RouterProvider router={router}/>
         <ToastContainer position="top-center" autoClose={2000} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
