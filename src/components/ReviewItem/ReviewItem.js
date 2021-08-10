import React from 'react';

const ReviewItem = (props) => {
    // console.log(props.product)
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid gold',
        margin:'10px',
        paddingBottom:'10px',
        marginLeft:'200px'
    }
    return (
        <div style={reviewItemStyle} className="product-name">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <button onClick={() => props.removeProduct(key)} className="cart-button">Remove</button>
        </div>
    );
};

export default ReviewItem;