
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { FaBars, FaHome, FaUsers } from 'react-icons/fa';
import { RiUserAddFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { useContext, useState } from 'react';
import { TbXboxX } from 'react-icons/tb';
import { Authcontext } from '../Login/AuthContexct';
import { toast } from 'react-toastify';


export default function SidBar() {

  let { userdata }: any = useContext(Authcontext)
  let { pathname } = useLocation(); // استخراج المعرف من الـ URL
  const [collapse, setcollapse] = useState(false)
  let navigate = useNavigate()

  let toggalecollapse = () => {
    setcollapse(!collapse)
    console.log(collapse);

  }


  let logout = ()=>{
    navigate("/nus")
    localStorage.removeItem("uertoken")
    toast.success("logout success")
  }

  return (
    <div className='vh-100 sidbar-container position-sticky top-0 start-0'>

      <Sidebar collapsed={collapse} className='vh-100 position-sticky'>
        <div className='mx-4 text-end pt-2 pointer-event pointer-event' >
          {collapse ? <FaBars onClick={toggalecollapse} size={20} /> : <TbXboxX onClick={toggalecollapse} size={30} />}

        </div>
        <div className='text-center pt-4 '>
          <div className=''>
            <img src={userdata.image} className='rounded-circle w-50' />
          </div>
          <h5 className='mt-3'> {userdata.firstName} </h5>
          <h6 className='mt-3 text-color'>Admin</h6>
        </div>
        <Menu
        >
          <MenuItem className={pathname == "/dashboard/home" ? "bg-color" : ""} icon={<FaHome />} component={<Link to="/dashboard/home" />}> Home</MenuItem>
          <MenuItem className={pathname == "/dashboard/user" ? "bg-color" : ""} icon={<FaUsers />} component={<Link to="/dashboard/user" />}> Users</MenuItem>
          <MenuItem className={pathname == "/dashboard/adduser" ? "bg-color" : ""} icon={<RiUserAddFill />} component={<Link to="/dashboard/adduser" />}> Add Users</MenuItem>
          <MenuItem className={pathname == "/dashboard/profile" ? "bg-color" : ""} icon={<CgProfile />} component={<Link to="/dashboard/profile" />}> Profile</MenuItem>
          <MenuItem onClick={logout} className='logout' icon={<CiLogout />}> Logout</MenuItem>
        </Menu>
      </Sidebar>;

    </div>
  )
}
