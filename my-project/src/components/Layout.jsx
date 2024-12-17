import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Navbar />
<Outlet/> 
    </div>
  )
}

export default Layout
