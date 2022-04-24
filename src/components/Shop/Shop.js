import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
  
  const [cart, setCart] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
      fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
          .then(res => res.json())
          .then(data => setProducts(data));
      
  }, [page,size]);

  useEffect(() => {
    fetch('http://localhost:5000/productCount')
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / +size);
        console.log(count,size);
        setPageCount(pages);
      });
  },[size])
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handelAddToCart = (SelectedProduct) => {
    //  confusing part see next time carefully
    // do not do this cart.push(product)
    let newCart = [];
    const exists = cart.find((product) => product._id === SelectedProduct._id);
    if (!exists) {
      SelectedProduct.quantity = 1;
      newCart = [...cart, SelectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== SelectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(SelectedProduct._id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}

        <div className='pagination'>
          {
            [...Array(pageCount).keys()].map(number => <button
              className={page === number ? 'selected' : '' }
            onClick={() => setPage(number)}
            
            >{number}</button>)
          }
          <select defaultValue='10' onChange={(e) =>setSize(e.target.value)}>
            <option value="5">5</option>
            <option  value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
