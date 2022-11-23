import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../features/ProductSlice';


export function useGetProduct() {
  const { product, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    { product, loading }
  )
}
