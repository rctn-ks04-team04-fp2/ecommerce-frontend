import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/CartSlice';
import { useNavigate } from 'react-router-dom';

const AddToCartButton = ({username, id}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCart = () => {
        if (localStorage.getItem("userToken") != null) {
            dispatch(addItemToCart({
            username: username,
            id: id
            }));
            navigate("/cart")
        } else {
            navigate("/login")
        }
        
        
        }
    return (
        <div onClick={handleCart} className="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</div>
    )
}

export default AddToCartButton