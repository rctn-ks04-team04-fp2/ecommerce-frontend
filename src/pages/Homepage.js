import React from 'react';
import { useGetProduct } from '../hooks/useGetProduct';
import ClipLoader from "react-spinners/ClipLoader";
import Products from '../components/Products';

const Homepage = () => {
  const {product, loading} = useGetProduct();
  
  if (loading)  {
    return (
        <>
            <div className='container mx-auto px-4'>
                <ClipLoader
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </>
    )
  }
  return (
    <div className='container mx-auto p-4'>
        <h1 className=''>Products</h1>
        <div className="grid grid-cols-5 gap-4 py-4">
            {product.map((item) => (
                <Products id={item.id} title={item.title} image={item.image} category={item.category} description={item.description} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default Homepage