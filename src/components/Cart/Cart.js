import React from "react";
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    
    for (const product of cart) {
        total += product.price;
        shipping += product.shipping;
        
    }
    const tax = total * 0.1;
    console.log(total);
    console.log(cart);
  return (
    <div className="cart">
      <h4>Order Summary</h4>
          <p>Selected items: {cart.length}</p>
          <p>Total Price: ${total} </p>
          <p>Total Shipping: ${shipping} </p>
          <p>Tax:{Number(tax.toFixed(2))} </p>
          <p><strong>Grand Total: </strong></p>
    </div>
  );
};

export default Cart;
