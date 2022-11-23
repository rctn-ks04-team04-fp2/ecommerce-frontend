import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addQuantity } from '../features/CartSlice';

const CartItems = ({id, quantity}) => {
  const itemData = useSelector((state) => state.product);
  const item = itemData.product[id - 1];
  const [totalPrice, setTotalPrice] = useState(quantity * item.price);
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.user.user || "");

  const quantityChange = (e) => {
    dispatch(addQuantity({
        username: username,
        id: id,
        quantity: e.target.value,
        totalPrice: -totalPrice + (e.target.value * item.price)
    }))
    setTotalPrice(e.target.value * item.price);
  }
  
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
        <div className="w-20">
            <img className="h-24" src={item.image} alt=""></img>
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{item.title}</span>
            <div className="font-semibold hover:text-red-500 text-gray-500 cursor-pointer text-xs">Remove</div>
        </div>
        </div>
        <div className="flex justify-center w-1/5">
        <input className="mx-2 border text-center w-10" type="text" onChange={(e) => {quantityChange(e)}} defaultValue={quantity} />
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">${item.price}</span>
        <span className="text-center w-1/5 font-semibold text-sm">${totalPrice}</span>
    </div>
  )
}

export default CartItems