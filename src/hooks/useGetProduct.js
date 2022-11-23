import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../features/ProductSlice';


export function useGetProduct() {
  const { product, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (product === []) {
      dispatch(fetchProduct());
      console.log(product);
    }
    console.log(product[2].stock);
    
  }, [dispatch]);
  return (
    { product, loading }
  )
}
