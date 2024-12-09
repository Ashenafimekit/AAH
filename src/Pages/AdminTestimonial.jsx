import React from 'react'
import AdminNavigation from '../Components/AdminNavigation'
import AdminTestimony from '../Components/AdminTestimony'

const AdminTestimonial = () => {
  return (
    <div className='flex flex-row'>
      <AdminNavigation/>
      <div className="w-full overflow-hidden">
        <AdminTestimony/>
      </div>
      
    </div>
  )
}

export default AdminTestimonial