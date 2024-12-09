import React from 'react'
import AdminNavigation from '../Components/AdminNavigation'
import AdminDashboard from '../Components/AdminContact'
import Logout from '../Components/Logout'

const AdminDashboard_page = () => {
  return (
    <div className='flex flex-row gap-5'>
        <AdminNavigation/>
        <div className='w-full'>
            <AdminDashboard/>
        </div>  
        <Logout/>
    </div>
  )
}

export default AdminDashboard_page