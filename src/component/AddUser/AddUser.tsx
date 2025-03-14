import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FallingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: number;
  birthDate: string;
}

interface AddUserProps {
  updatedate: () => void;
  userId?: number | null;
}

export default function AddUser({ updatedate, userId }: AddUserProps) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<UserFormData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      // إذا كان userId موجودًا، قم بجلب بيانات المستخدم لتحديثها
      axios.get(`https://dummyjson.com/users/${userId}`)
        .then(response => {
          const user = response.data;
          console.log(user);

          setValue('firstName', user.firstName);
          setValue('lastName', user.lastName);
          setValue('email', user.email);
          setValue('age', user.age);
          setValue('phone', user?.phone);
          setValue('birthDate', user.birthDate);
        })
        .catch(error => {
          toast.error("Failed to fetch user data");
        });
    }
  }, [userId, setValue]);

  const onSubmit = async (data: UserFormData) => {
    setLoading(true);
    try {
      if (userId) {
        // تحديث المستخدم إذا كان userId موجودًا
        await axios.put(`https://dummyjson.com/users/${userId}`, data);
        toast.success("User Updated Successfully!");
      } else {
        // إضافة مستخدم جديد إذا لم يكن userId موجودًا
        await axios.post(`https://dummyjson.com/users/add`, data);
        toast.success("User Added Successfully!");
      }
      updatedate(); // تحديث القائمة بعد الإضافة أو التحديث
    } catch (error) {
      // toast.error("Sorry, failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div> <h3>{userId ? 'Update User' : 'Add User'}</h3> </div>
      <hr />
      <form className='m-5 shadow-lg p-3' onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6 mt-3'>
            <div className='mt-3'>
              <label>First Name</label>
              <input type='text'
                {...register("firstName", { required: "First Name is required!!" })}
                placeholder='Enter Your First Name' className='form-control mt-2 p-2' />
              {errors.firstName && <span className='text-danger'> {errors.firstName.message} </span>}
            </div>
          </div>
          <div className='col-md-6 mt-3'>
            <div className='mt-3'>
              <label>Last Name</label>
              <input type='text'
                {...register("lastName", { required: "Last Name is required!!" })}
                placeholder='Enter Your Last Name' className='form-control mt-2 p-2' />
              {errors.lastName && <span className='text-danger'> {errors.lastName.message} </span>}
            </div>
          </div>
          <div className='col-md-6 mt-3'>
            <div className='mt-3'>
              <label>Email</label>
              <input type='text'
                {...register("email", {
                  required: "Email is required!!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email Should be valid"
                  }
                })}
                placeholder='Enter Your Email' className='form-control mt-2 p-2' />
              {errors.email && <span className='text-danger'> {errors.email.message} </span>}
            </div>
          </div>
          <div className='col-md-6 mt-3'>
            <div className='mt-3'>
              <label>Age</label>
              <input type='number'
                {...register("age", { required: "Age is required!!" })}
                placeholder='Enter Your Age' className='form-control mt-2 p-2' />
              {errors.age && <span className='text-danger'> {errors.age.message} </span>}
            </div>
          </div>
          <div className='col-md-6 mt-3'>
            <div className='mt-3'>
              <label>Phone Number</label>
              <input type='text'
                {...register("phone", { required: "Phone is required!!" })}
                placeholder='Enter Your Phone Number' className='form-control mt-2 p-2' />
              {errors.phone && <span className='text-danger'> {errors.phone.message} </span>}
            </div>
          </div>
          <div className='col-md-6 mt-3'>
            <div className='mt-3'>
              <label>Birth Date</label>
              <input type='text'
                {...register("birthDate", { required: "Birth Date is required!!" })}
                placeholder='Enter Your Birth Date' className='form-control mt-2 p-2' />
              {errors.birthDate && <span className='text-danger'> {errors.birthDate.message} </span>}
            </div>
          </div>
          <div className='text-center'>
            {loading ? (
              <div className=''>
                <FallingLines color="#F8D442" width="100" visible={true} />
              </div>
            ) : (
              <button className='btn btn-warning mt-4 w-50'>
                {userId ? 'Update' : 'Send'}
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}