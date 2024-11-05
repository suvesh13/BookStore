import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser] = useAuth()
    const handle=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("User")
            toast.success("Logout Sucessfully!!")
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            
            
        } catch (error) {
            toast.error("Error :",error.message)
        }
    }
  return (
    <div>
      <button className='bg-red-500 text-white rounded-md cursor-pointer px-3 pxy-2' onClick={handle}>Logout</button>
    </div>
  )
}

export default Logout
