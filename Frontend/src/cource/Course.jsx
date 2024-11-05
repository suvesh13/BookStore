import React from 'react'
import { useState,useEffect } from 'react';
// import list from "../../public/list.json"
import Card from "../components/Cards.jsx"
import { Link } from 'react-router-dom';
import axiso from "axios"

function Course() {
  const [book,setBooks] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const response = await axiso.get("http://localhost:4000/book");
        console.log(response.data);
        setBooks(response.data)        
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
    
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
    <div >

      <div className='max-w-screen -2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl  front-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
          <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum temporibus ipsa delectus deleniti in architecto itaque distinctio, velit quod cum error aliquid blanditiis odio omnis voluptas rerum dolores tempore earum. Lorem ipsum Lorem ipsum dolor . dolor, sit amet consectetur adipisicing elit. Quisquam labore pariatur, laborum nam dolorum a obcaecati cum iste magnam non.</p>

          <Link to='/'>
              <button  className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item)=>(
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Course
