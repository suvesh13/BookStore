import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axiso from "axios"
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const { 
        register, 
        handleSubmit, 
        formState: { errors } , 
    } = useForm();

    const onSubmit = async(data)=>{
        console.log(data);
        
       const userInfo = {   fullname : data.name,
                            email:data.email,
                            password:data.password
                        }
        
                        
        await axiso.post("http://localhost:4000/user/signup",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('SignUp Successfully!');
                navigate(from,{replace:true})
            }
            localStorage.setItem("User",JSON.stringify(res.data.user));
        }).catch((err)=>{
           if(err.response){
            console.log(err.response.data);
            toast.error("Error:"+ err.response.data)
            
           }
            
        })
    
        
       }

  return (
    <div className='flex h-screen items-center justify-center'>
       <div className=" w-[500px] border-[2px] shadow-md p-5 rounded-2xl">
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Signup!</h3>
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input type="text"
                placeholder="Enter your name"
                className='w-80 py-1 px-3 border rounded-md mt-1 '
                {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className='text-sm text-red-400'>This field is required</span>}
            </div>
            {/* Email */}
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email"
                placeholder="Enter your Email"
                className='w-80 py-1 px-3 border rounded-md mt-1 '
                {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
            </div>
            {/* password */}
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type="password"
                placeholder="Enter your password"
                className='w-80 py-1 px-3 border rounded-md mt-1 '
                {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
            </div>
            {/*Login */}
            <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                <p >Have Account? {" "}<button className='underline text-blue-500 cursor-pointer' onClick={()=> document.getElementById("my_modal_3").showModal()}> Login </button></p>
                <Login/>
            </div>
            </form>
        </div>
        
        </div>
    </div>
  )
}

export default Signup
