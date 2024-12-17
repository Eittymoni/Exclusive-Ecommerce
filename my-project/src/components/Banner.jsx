import React from 'react'
import Container from './Container'
import { IoIosArrowForward } from "react-icons/io";
import banImg from "../assets/banner.jpg"


const Banner = () => {
  return (
   <>
   <hr className='border-[1px]' />
   <Container>
    <div className=" lg:flex  justify-between items-center py-2 ">
    <div className="lg:w-1/5 w-full py-4  order-2 lg:order-1 ">
<ul>
  <li className='flex items-center gap-2'>Woman’s Fashion <IoIosArrowForward/> </li>
  <li className='flex items-center gap-2'>Woman’s Fashion <IoIosArrowForward/> </li>
  <li className='flex items-center gap-2'>Woman’s Fashion <IoIosArrowForward/> </li>
  <li className='flex items-center gap-2'>Woman’s Fashion <IoIosArrowForward/> </li>
  <li className='flex items-center gap-2'>Woman’s Fashion <IoIosArrowForward/> </li>
</ul>
   </div>
   
<div className=" lg:w-[80%] w-full px-2 order-1  lg:order-2">
 <img src={banImg} alt="" className='w-full' />


</div>
    </div>
   </Container>
   </>
  )
}

export default Banner
