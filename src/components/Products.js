import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/CartSlice';
import { useSelector } from 'react-redux';

const Products = ({ title, image, category, rating, price, id }) => {

  const { username } = useSelector((state) => state.user.user || "");
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div key={id} className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700 hover:shadow-2xl duration-500">
      <a href="#" onClick={() => {navigate("/"+id+"/detail")}} className='bg-white'>
          <img className='p-8 rounded-t-lg h-60 w-50 mx-auto' src={image} alt="product"></img>
      </a>
      <div className="px-5 pb-5">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ category }</span>
          <a href="#" onClick={() => {navigate("/"+id+"/detail")}}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{title}</h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            {[...Array(Math.floor(rating.rate))].map((object, i) => (
              <svg key={i} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            ))}
              
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating.rate}</span>
          </div>
          <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-black">${price}</span>
              <a href="#" onClick={handleCart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
          </div>
      </div>
    </div>
  )
}

export default Products;