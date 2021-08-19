import React from 'react';
import  { useState } from 'react';

const Cart = () => {
const [cart, setCart] = useState([]);


const handleEnrollButton = (card) => {
    console.log('Card added', card);
    const newCart = [...cart, card];
    setCart(newCart);
}
    return (
        <div className="cart">
            <h3>This is Cart</h3>
            <h5>Order Summary : {cart.length}</h5>
        </div>
    );
};

export default Cart;