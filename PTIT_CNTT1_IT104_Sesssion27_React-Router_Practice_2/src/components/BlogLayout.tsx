import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}
