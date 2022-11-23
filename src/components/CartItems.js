import React from 'react';
import { useSelector } from 'react-redux';

const CartItems = ({id, quantity}) => {
  const itemData = useSelector((state) => state.product);
  const item = itemData.product[id - 1];

  const quantityChange = (e) => {
    console.log(e.target.value);
  }
  
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
        <div className="w-20">
            <img className="h-24" src={item.image} alt=""></img>
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{item.title}</span>
            <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
        </div>
        </div>
        <div className="flex justify-center w-1/5">
        <input className="mx-2 border text-center w-10" type="text" onChange={(e) => {quantityChange(e)}}/>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">${item.price}</span>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
    </div>
  )
}

export default CartItems