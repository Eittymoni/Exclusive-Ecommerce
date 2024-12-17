import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ApiData } from '../components/ContaxtApi';
import { Link } from 'react-router-dom';

const Shop = () => {
    let info = useContext(ApiData)
  return (
    <>
 <div className="flex justify-between flex-wrap gap-2">
 {info.map((item)=>
 
  <div className="w-[30%] ">
   
                  <div className="">
                      <div className=" relative group overflow-hidden">
                      <Link to={`/shop/${item.id}`}> 
                          <img src={item.thumbnail} alt=""  className='w-full'/>
                          </Link>
      
                          <ul className=' bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-0 py-2 text-end pr-4'>
                              <li py-2> Add to cart <FaCartArrowDown className=' inline-block'/> </li>
                              <li py-2> Add to heart <FaRegHeart className=' inline-block'/> </li>
                          </ul>
                      </div>
      
                      
                  </div>
                  <div className=" flex justify-between">
                  <p>{item.title}</p>
                  <p>${item.price} </p>
                  
       
                  </div>
                 

 </div>

     )}
 </div>
   
             

  </>      
  )
}

export default Shop
