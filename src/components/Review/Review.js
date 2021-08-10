import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlased, setOrderPlased] = useState(false)
    const removeProduct = (productKey) => {
        // console.log("remove clicked", productKey)
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product;
        })
        setCart(cartProduct)
    }, [])

    const handleOrderProcess = () => {
        setCart([])
        setOrderPlased(true)
        processOrder();
    }
    let thankyou;
    if (orderPlased) {
        thankyou = <img src={happyImage} alt="" />
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}
                    removeProduct = {removeProduct}
                    product={pd}></ReviewItem>)
            }
            {
                thankyou
            }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                    <button onClick={handleOrderProcess} className="cart-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;