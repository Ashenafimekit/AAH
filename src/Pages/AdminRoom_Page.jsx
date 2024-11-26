import React from 'react'
import AdminNavigation from '../Components/AdminNavigation'
import AdminRoom from '../Components/AdminRoom'

const AdminRoom_Page = () => {
  return (
    <div className='flex flex-row'>
        <AdminNavigation/>
        <div className="w-full">
            <AdminRoom/>
        </div>
    </div>
  )
}

export default AdminRoom_Page