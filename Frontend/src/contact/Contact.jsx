import React from 'react'
import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [names,setNames] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMesssage] = useState("");

  const [sticky,setSticky] = useState(false);
  const navigate = useNavigate();
  
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>0){
                setSticky(true);
            }else{
                setSticky(false);
            }
        }
        window.addEventListener('scroll',handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!names.trim()) { // Check if `names` is an empty string or only whitespace
        toast.error("Enter name");
      }else if(!email.trim()){
        toast.error("Enter Email Address")
      }else if(!message.trim()){
        toast.error("Enter fedback")
      } else {
        toast.success("Thank you for your feedback!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    };

    useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);
  return (
    <div div className='flex h-screen items-center justify-center'>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
          sticky ? 'sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out' : ''
        }`}
      >
        
      </div>

      <div className="w-full max-w-md  container mx-auto mt-16 p-4  border-[2px] shadow-md p-5 rounded-2xl">
        <div className='font-bold text-lg mb-4 text-center '> Contact Us</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname" className="mt-3 block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            value={names}
            onChange={(e)=>setNames(e.target.value)}
            placeholder="Enter Your name"
                className='w-80 py-1 px-3 border rounded-md mt-1 '
          />

          <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mt-4">Email</label>
          <input
            type="email"
            id="fname"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email Address"
                className='w-80 py-1 px-3 border rounded-md mt-1 '
          />
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mt-4">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Type Your Message.."
            onChange={(e)=>setMesssage(e.target.value)}
            style={{ height: '200px' }}
            className='w-80 py-1 px-3 border rounded-md mt-1 '
          ></textarea>
            <br />
          <input
            type="submit"
            value="Submit"
            className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          />
        </form>
      </div>
    </div>
  );
}


export default Contact


/*<div className={`max-w-screen -2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky?"sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out":""}`}>
      <div>
        
      </div>
    </div> */