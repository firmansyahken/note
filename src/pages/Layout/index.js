import React from 'react'
import { Outlet } from "react-router-dom"
import { Topbar } from '../../components'

const Layout = () => {
  return (
    <>
        <Topbar/>
        <div className="wrapper">
          <Outlet/>
        </div>
    </>
  )
}

export default Layout