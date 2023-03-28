import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Header'

const Layout = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" ,display: "flex", flexDirection:"column", padding: "0" ,overflowX: 'hidden' }}>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Layout