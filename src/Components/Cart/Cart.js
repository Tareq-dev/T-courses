import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css'



const Cart = (props) => {
    
    
    const cart = props.cart;
    const courseTotal = cart.reduce((sum,course)=> sum + course.price, 0);
    const tax = courseTotal/10;
   



    return (
          <div className="cart-container">
              <div className="cart-desc">
              <h4>Total Item Order : ({cart.length})</h4>
              <p> Price : $ {courseTotal}</p>
              <p> Tax : $ {tax}</p>
              <h5> Grand Total : $ {courseTotal + tax}</h5>
              <Button variant="success">Place Order</Button>
              </div>
        </div>
          
     );
};

export default Cart;