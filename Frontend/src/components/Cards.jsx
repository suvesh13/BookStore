import React from 'react'

function Cards({item}) {
  return (
    <>
        <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <figure>
                <img
                src= {item.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.categoty}</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions flex justify-between">
                <div className="badge badge-outline p-3">{`$${item.price}`}</div>
                <div className="cursur-pointer px-2 py-1 rounded-full hover:text-white hover:bg-pink-500 duration-200 p-3">BUY NOW</div>
                </div>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default Cards
