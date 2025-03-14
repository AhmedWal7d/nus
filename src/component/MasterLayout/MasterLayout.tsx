import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SidBar from '../SisBar/SidBar'
import { Authcontext } from '../Login/AuthContexct'

export default function MasterLayout() {
  let { userdata }: any = useContext(Authcontext)
  return (
    <div>
      <div className='d-flex'>
        <div> <SidBar />  </div>
        <div className='w-100 mx-4 pt-2'>
          <div className='d-flex justify-content-between mt-2 bg-color rounded px-4 text-white'>
            <h5 className='pt-2'>Dashboard User Management System</h5>
            <img src={userdata?.image} className='imgnavbar' />
          </div>
          <Outlet />
        </div>
      </div>


    </div>
  )
}
