import React from 'react'
import { useState, useEffect } from 'react';

function About() {
  const [sticky,setSticky] = useState(false);
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
  return (
    <div className={`max-w-screen -2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky?"sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out":""}`}>
      About
    </div>
  )
}

export default About
