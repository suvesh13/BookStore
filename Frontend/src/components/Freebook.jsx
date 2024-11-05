import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import list from "../../public/list.json"
import Cards from './Cards';

function Freebook() {
  const [bok,setBok] = useState([]);
  useEffect(()=>{
    const getBok = async()=>{
      try {
        const response = await axios("http://localhost:4000/book")
        console.log(response);
        setBok(response.data);
      } catch (error) {
        console.log("ERROR:",error);
      }
    }
    getBok();
  },[])

  const filterData = bok.filter((arr)=>(arr.categoty==='Free'))

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <div className='max-w-screen -2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-bold text-xl pb-2'>Free Offered Course</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nobis.</p>
        </div>
      
      <div className='mt-10'>
        <Slider {...settings}>
          {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
      </div>

    </>
  )
}

export default Freebook
