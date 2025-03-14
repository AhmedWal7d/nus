import React, { useContext } from 'react'
import { Authcontext } from '../Login/AuthContexct'

export default function Profile() {
  let { userdata }: any = useContext(Authcontext)

  return (
    <>
      <div className='row mt-5'>
        <div className='col-md-6 mt-3'>
          <div className='mt-3'>
            <label>first Name</label>
            <input type='text'
              placeholder='Enter Your First Name ' value={userdata.firstName} disabled className='form-control mt-2 p-2' />
          </div>
        </div>
        <div className='col-md-6 mt-3'>
          <div className='mt-3'>
            <label>Last Name</label>
            <input type='text'
              placeholder='Enter Your First Name ' value={userdata.lastName} disabled className='form-control mt-2 p-2' />
          </div>
        </div>
        <div className='col-md-6 mt-3'>
          <div className='mt-3'>
            <label>Email</label>
            <input type='text'
              placeholder='Enter Your First Name ' value={userdata.email} disabled className='form-control mt-2 p-2' />
          </div>
        </div>
        <div className='col-md-6 mt-3'>
          <div className='mt-3'>
            <label>Age</label>
            <input type='text'
              placeholder='Enter Your First Name ' value={"25"} disabled className='form-control mt-2 p-2' />
          </div>
        </div>
        <div className='col-md-6 mt-3'>
          <div className='mt-3'>
            <label>Birht Date</label>
            <input type='text'
              placeholder='Enter Your First Name ' value={"2000-12-25"} disabled className='form-control mt-2 p-2' />
          </div>
        </div>
        <div className='col-md-6 mt-3'>
          <div className='mt-3'>
            <label>Phone Number</label>
            <input type='text'
              placeholder='Enter Your First Name ' value={"+201126303082"} disabled className='form-control mt-2 p-2' />
          </div>
        </div>
      </div>
    </>
  )
}
