import React from 'react'
import { useGetProduct } from '../hooks/useGetProduct'
import { useSelector } from 'react-redux';

const Products = () => {
  const {product, loading} = useGetProduct();
  console.log(product);
  return (
    <>
      
    </>
  )
}

export default Products