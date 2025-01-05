import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header'
import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from 'sonner'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const router = createBrowserRouter([

    {
        path: '/',
        element: <App />
    },
    {
        path: '/create-trip',
        element: <CreateTrip />
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <Header />
            <Toaster />
            <RouterProvider router={router} />
        </ClerkProvider>
    </StrictMode>,
)
