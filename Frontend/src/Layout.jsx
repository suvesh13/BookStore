import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout() {
  return (
    <div className='dark-bg-slate-900 dark:text-white'>
       <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
