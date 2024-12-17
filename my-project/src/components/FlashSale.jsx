import React, { useContext } from 'react'
import Container from './Container'
import FlashSaleComponents from './FlashSaleComponents'
import { ApiData } from './ContaxtApi';
import { Link } from 'react-router-dom';

const FlashSale = () => {
  let data= useContext(ApiData)
   
    

  return (
   <>
 <Container>
  <h2 className='font-Inter text-4xl font-semibold'>Flash Sales</h2>
  <div className=" py-6 flex justify-between flex-wrap gap-4">
{data.map((item)=>
<Link to="/shop">
<FlashSaleComponents item={item}/>
</Link>
  
)}
 
  </div>
 </Container>
   
   </>
  )
}

export default FlashSale
