import React from 'react'
import AdminNavigation from '../Components/AdminNavigation'
import AdminTestimony from '../Components/AdminTestimony'
import Logout from '../Components/Logout'

const AdminTestimonial = () => {
  return (
    <div className='flex flex-row'>
      <AdminNavigation/>
      <div className="w-full overflow-hidden">
        <AdminTestimony/>
      </div>
      <Logout/>
    </div>
  )
}

export default AdminTestimonial