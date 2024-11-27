import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';
import QRImage from '../assets/images/QR.jpg';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const [checkoutClicked, setCheckoutClicked] = useState(false);

  const handleCheckout = () => {
    setCheckoutClicked(true); 
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: ₹{totalPrice}</p>
      {!checkoutClicked ? (
        <>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="checkout-content">
          <img src={QRImage} alt="QR Code" className="qr-code" />
          <p>Amount to pay: ₹{totalPrice}</p>
          <p>Please proceed with the payment.</p>
          <p>Once the payment is completed, take a screenshot of the payment confirmation.</p>
          <p>Send your complete address and phone number, along with the screenshot, to the email address: <a href="mailto:swapnildas742@gmail.com">swapnildas742@gmail.com</a></p>
          <p>You will receive the status of your order in your email within 10 minutes.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
