import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './home/Home.jsx';
import Course from './cource/Course.jsx';
import About from './about/About.jsx';
import Contact from './contact/Contact.jsx';
import Signup from './components/Signup.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider, { useAuth } from './context/AuthProvider.jsx'; // Import useAuth

function MainApp() {
  // Access authUser and setAuthUser using useAuth hook
  const [authUser, setAuthUser] = useAuth();

  console.log('Auth User:', authUser); // Example usage to log the current user

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/cource' element={authUser?<Course />:<Navigate to="/signup"/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
      </Route>
    )
  );

  return (
    <div>
      {/* You can also pass authUser as a prop to child components if needed */}
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  </React.StrictMode>
);
