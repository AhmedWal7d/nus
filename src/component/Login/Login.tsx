import { useForm } from 'react-hook-form'
import img from '../../assets/images (1).jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { Audio, Oval } from 'react-loader-spinner'
import { Authcontext } from './AuthContexct';


interface loginforminput {
  username: string;
  password: string
}
interface Authcontexttype{
  saveUserdata:()=> void
}
export default function Login() {

  let { register, handleSubmit, formState: { errors } } = useForm<loginforminput>()
  const [loading, setloading] = useState(false)
  let { saveUserdata } = useContext(Authcontext) as Authcontexttype

  let Navigate = useNavigate()
  let onsubmit = async (data: loginforminput) => {


    try {
      setloading(true)
      let respose = await axios.post("https://dummyjson.com/auth/login", data)
      localStorage.setItem("uertoken", respose.data?.accessToken)
      saveUserdata()
      toast.success("wow login succfully")
      setloading(false)
      Navigate("/dashboard/home")
    } catch (error) {
      console.log(error);
      setloading(false)

      toast.error("soory filed try again!")
    }

  }

  return (
    <div className='container-fluid login-container bg-warning '>


      <div className='row vh-100 justify-content-center align-items-center'>
        <div className='row '>
          <div className='col-md-6'>
            <img src={img} className='w-100 vh-100' />
          </div>
          <div className='col-md-6 mt-5'>
            {loading ? <div className='d-flex justify-content-center align-items-center vh-100'>
              <Oval
                visible={true}
                height="80"
                width="80"
                color="rgba(236, 168, 19, 0.5)"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div> : <form className='bg-white rounded p-4 mt-5 w-75 mx-auto' onSubmit={handleSubmit(onsubmit)}>
              <div className='title text-center '>
                <h3 className='fw-bold loginaffter'>User mangement System   </h3>
                <div className='text-center mt-3'>
                  <h4>Sign In</h4>
                  <small className='text-muted'>Enter Your Credentials to access Your account</small>
                </div>
              </div>
              <div className='mt-3'>
                <label>username</label>
                <input type='text'
                value={"emilys"}
                  {...register("username", { required: "username is not file" })}
                  placeholder='Enter Your Email ' className='form-control mt-2 p-2' />

                {errors.username && <span className='text-danger'> {errors.username.message} </span>}

              </div>
              <div className='mt-4'>
                <label>Password</label>
                <input type='password'
                value={"emilyspass"}
                  {...register("password", { required: "username is not file" })}
                  placeholder='Enter Your Password ' className='form-control mt-2 p-2' />
                {errors.password && <span className='text-danger'> {errors.password.message} </span>}
              </div>
              {loading ? <> <Audio
                height="80"
                width="80"
                color="green"
                ariaLabel="three-dots-loading"

              /> </> : <>    <button type='submit' className='btn btn-warning w-100 mt-3 text-white'>SIGN IN </button></>}
            </form>}

          </div>

        </div>
        <div className='col-md-4'>

        </div>
      </div>

    </div>
  )
}
