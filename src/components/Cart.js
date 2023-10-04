import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
        <div className="w-11/12 mx-auto relative">
          {cartItems.length === 0 && (
            <h2 className="text-xl font-bold mb-4 text-center">
              Your cart is empty
            </h2>
          )}
          <ItemList items={cartItems} />
          <button
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
