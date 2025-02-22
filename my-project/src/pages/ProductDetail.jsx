import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Container from '../components/Container';
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../slice/ProductSlice';

const ProductDetail = () => {
  let navigate= useNavigate()
  let productId= useParams()
  let dispatch = useDispatch()

  let [singleProduct, setSingleProduct] = useState({});
  let getSingleProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    getSingleProduct();
  }, [productId]);

  
  let clientRating = Array.from({length:5}, (_, index)=>{
    let number = index + 0.5
    return singleProduct.rating > index + 1 ? <FaStar className="text-[gold]" /> : singleProduct.rating > number ?  <FaRegStarHalfStroke className="text-[gold]" /> :<FaRegStar className="text-[gold]" />

  })

  let discount = singleProduct.price * singleProduct.discountPercentage / 100

  let newPrice = singleProduct.price - discount

  let handleCart = (item) => {
    dispatch(AddToCart({...item, qun:1}))
    toast("WelCome to Cart Page");
    setTimeout(()=>{
     navigate("/cart")
    },2000)
  };

  
  return (
   
   <>
   <Container>
   <h2 className="text-[#262626] font-normal text-[20px] font-sans pt-8">
          <Link to="/">Home</Link> &#62; <Link to="/shop">Products</Link>
        </h2>
        <div className="">
        <div className="w-[48%]">
            <img className="w-full" src={singleProduct.thumbnail} alt="" />
          </div>

        </div>
        <h3 className="text-[#262626] font-bold text-[20px] font-sans pt-8">
          Product
        </h3>
        <div className="">
          <div className="flex gap-x-2 items-center">
          {clientRating} |<span>Review</span>
          </div>
          <div className="">
          <h2>Price</h2>
           <del className="font-semibold"> ${singleProduct.price}</del><span className="font-bold"> ${newPrice.toFixed(2)}</span>
        </div>

          <h3>STATUS: {singleProduct.stock}</h3>

          <div className="flex flex-wrap md:flex-nowrap my-5">
          <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
            Add to Wish List
          </button>
          <button  onClick={()=>handleCart(singleProduct)} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
            Add to Cart
          </button>
        </div>

        </div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />

   </Container>
   </>
  )
}

export default ProductDetail

