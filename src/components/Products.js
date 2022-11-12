import React from 'react'

const Products = ({ id, title, image, category, description, price }) => {

  return (
    <a className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl duration-500" href='facebook.com'>
      <img className="object-contain h-60 w-40 mx-auto" src={image} alt={id}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description.substring(0, 100)}...
        </p>
      </div> 
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${price}</span>
      </div>
    </a>
  )
}

export default Products;