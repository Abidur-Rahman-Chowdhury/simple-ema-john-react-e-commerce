import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            
        }
        setCart(saveCart);
    },[products])
   
    const handelAddToCart = (SelectedProduct) => {
        //  confusing part see next time carefully
        // do not do this cart.push(product)
        let newCart = [];
        const exists = cart.find(product => product.id === SelectedProduct.id);
        if (!exists) {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== SelectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];

        }
        setCart(newCart);
        addToDb(SelectedProduct.id);
    }
    return (
        <div className='shop-container'>
            
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product ={product} handelAddToCart ={handelAddToCart}
                    
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;