import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options 
    //1. Element variable   (command)
    //2. Ternary operator condition ? true : false
    //3. && Operator (shorthand)
    //4. ||

    let command;
    if (cart.length === 0) {
        command = <p>Please Add at least  one items</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more </p>
    }
    else {
        command = <p><small>Thanks for adding Items</small></p>
    }
    return (
        <div>
            <h2>Item Selected:{cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>YAY!! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon k gift  diba</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
        </div>

    );
};

export default Cart; 