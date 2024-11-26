import React from 'react'
import AdminNavigation from '../Components/AdminNavigation'
import AdminDashboard from '../Components/AdminDashboard'

const AdminDashboard_page = () => {
  return (
    <div className='flex flex-row gap-20'>
        <AdminNavigation/>
        <div>
            <AdminDashboard/>
        </div>

    </div>
  )
}

export default AdminDashboard_page