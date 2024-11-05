import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } , 
    } = useForm();
    const onSubmit = async(data)=>{
        console.log(data);
        
       const userInfo = {  
                            email:data.email,
                            password:data.password
                        }
        
                        
        await axios.post("http://localhost:4000/user/login",userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('Successfully created!');
                document.getElementById("my_modal_3").close();
                setTimeout(()=>{
                    localStorage.setItem("User",JSON.stringify(res.data.user));
                    window.location.reload();
                },1000)
            }
            
            
        }).catch((err)=>{
           if(err.response){
            console.log(err.response.data.message);
            toast.error("Error:"+ err.response.data.message)
            setTimeout(()=>{},3000)
            
           }
            
        })
    }

    const handleSignupClick = () => {
        // Close the modal when navigating to the signup page
        modalRef.current.close();
      };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Login!</h3>
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
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                <p >Not registered? {" "}<Link to='/signup' className='underline text-blue-500 cursor-pointer' onClick={handleSignupClick}> Signup </Link></p>
            </div>
            </form>
        </div>
        </dialog>
    </div>
  )
}

export default Login
