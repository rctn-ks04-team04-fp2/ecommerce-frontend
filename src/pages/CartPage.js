import CartItems from '../components/CartItems';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { setProductStock } from '../features/ProductSlice';
import { useDispatch } from 'react-redux';

const CartPage = () => {
  
  const { username } = useSelector((state) => state.user.user || "");
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const allCart = useSelector((state) => state.cart);
  let userCart = []
  let userTotalPrice = 0;
  
  allCart.carts.forEach(element => {
    if (element.username === username) {
        userCart = element.cart;
        userTotalPrice = element.totalPrice;
    }
  });
  console.log(userCart);

  const handleCheckout = () => {
    console.log("masuk");
    userCart.forEach((item) => {
        dispatch(setProductStock({
            id: item.id - 1,
            newStock: -item.quantity
        }))
    })
  }

  return (
    <div className="container mx-auto mt-10 h-screen">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {userCart.map((item) => 
            <CartItems id={item.id} quantity={item.quantity} />
        )}
        
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${userTotalPrice}</span>
          </div>
          <button onClick={handleCheckout} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" disabled={isDisabled}>Checkout</button>
        </div>
      </div>

    </div>
  </div>
  )
}

export default CartPage