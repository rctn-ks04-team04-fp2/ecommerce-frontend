import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddToCartButton from '../components/AddToCartButton';

const DetailPage = () => {
  const {id} = useParams();
  const itemData = useSelector((state) => state.product);
  const item = itemData.product[id - 1];
  const { username } = useSelector((state) => state.user.user || "");
  
  return (
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={item.image}></img>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
          {[...Array(Math.floor(item.rating.rate))].map((object, i) => (
              <svg key={i} aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            ))}
            <span className="text-gray-600 ml-3">{item.rating.rate} Review(s)</span>
          </span>
        </div>
        <p className="leading-relaxed">{item.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${item.price}</span>
          <div className="mx-3">
            <AddToCartButton username={username} id={id} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DetailPage