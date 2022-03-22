import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img: image, name, seller, price, ratings } = props.product;
    // const { handelAddToCart } = props;
    // console.log(props);
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: { seller}</small></p>
            <p><small>Ratings: {ratings } stars</small></p>
            </div>
            <button className='btn-cart' onClick={()=> props.handelAddToCart(props.product)}>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;