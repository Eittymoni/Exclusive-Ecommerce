
import banImg from "../assets/ban.png"
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


const FlashSaleComponents = ({item}) => {
  
    return (

        <div className="w-[98%]">
            <div className="">
                <div className=" relative group overflow-hidden">
                    <img src={item.thumbnail} alt=""  className='w-full'/>

                    <ul className=' bg-white absolute left-0 h-[130px] duration-300 ease-in-out bottom-[-120px] w-full group-hover:bottom-0 py-2 text-end pr-4'>
                        <li py-2> Add to cart <FaCartArrowDown className=' inline-block'/> </li>
                        <li py-2> Add to heart <FaRegHeart className=' inline-block'/> </li>
                    </ul>
                </div>

                
            </div>
            <div className=" flex justify-between">
            <p>{item.title}</p>
            <p> {item.price}</p>
            
            </div>
        </div>

    )
}

export default FlashSaleComponents
