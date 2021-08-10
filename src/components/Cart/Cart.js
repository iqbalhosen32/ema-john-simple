import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);

    let shipping = 0;
    if(total > 350){
        shipping = 0;
    }
    else if(total > 150){
        shipping = 4.99;
    }
    else if(total > 100){
        shipping = 7.99;
    }
    else if(total > 50){
        shipping = 12.99;
    }

    const tax = total*0.10;

    const grandTotal = total + tax + shipping;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3 className="bg-danger">This is cart</h3>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Product Price: {formatNumber(total)}</small></p>
            <p><small>Shipping Cost: {formatNumber(shipping)}</small></p>
            <p><small>Vat + Tax: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;