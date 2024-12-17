import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Navbar = () => {
    let[show,setShow]= useState(false)
    let[cart, setCart]= useState(false)

    let cartRef = useRef()


    useEffect(()=>{

        document.addEventListener("click", (e) =>{
        if (cartRef.current.contains(e.target)) {
            setCart(!cart);
          } else {
            setCart(false);
          }
          })
}, [ cart])

  return (
  


<>
<Container>
<div className="flex items-center overflow-hidden flex-wrap py-3 lg:py-6">
<div className="lg:w-1/5 w-1/2">
    <h2 className='font-Inter font-bold text-2xl text-black'>Exclusive</h2>
</div>
<div className="lg:w-1/2 w-ful"> 

<ul className={`lg:flex lg:justify-center text-center lg:static absolute  z-[2] top-0 left-0 ease-in-out duration-300 ${show ? " right-0  top-[100px] w-full": "left-[-100%] w-full"}`}>

    <li className=' font-Pop text-base px-5 py-2 lg:py-0 '>
      <Link to="/">
      Home
      </Link>
     
      </li>
    <li className=' font-Pop text-base px-5 py-2 lg:py-0 '> 
      <Link to="/shop">
      Shop
      </Link>
     </li>
    <li className=' font-Pop text-base px-5 py-2 lg:py-0 '>Contact</li>
    <li className=' font-Pop text-base px-5 py-2 lg:py-0 '>Sign Up</li>
</ul>


</div>

<div className="lg:hidden flex justify-end  w-1/2" onClick={ ()=> setShow(!show)}>
    {show? < RxCross2 className=' cursor-pointer' />: <FaBars className=' cursor-pointer'/>}
</div>
<div className="py-3 lg:py-0 lg:w-1/4 w-full flex justify-between items-center gap-6">
<div className="relative">
<input type="text" placeholder="Search..." className="px-3 border-[1px] rounded-[6px] h-[38px] w-[240px] " />
<CiSearch className='absolute top-[50%] translate-y-[-50%] left-[200px]' />
</div>
<div className=""> 
    < FaRegHeart className=' text-2xl'/>
</div>

    <div className=" relative text-2xl cursor-pointer" ref={cartRef}>
    <FaCartArrowDown/>
    {cart && 
    <div className=" absolute top-[25px] right-0 "> helo</div>
   }
</div>



</div>
 </div>


</Container>
</>


  )
}

export default Navbar
