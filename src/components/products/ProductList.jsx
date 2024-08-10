// src/components/ProductList.jsx
//import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';



const ProductList = () => {
    const { products } = useProducts();
    const { addToCart } = useCart();

    return (
        <>
            <div>
                <h2>Product List</h2>
                <ul>
                    {products.map(product => (
                        <><li key={product.id}>
                            {product.name} - {product.price}
                            &nbsp;
                            <button onClick={() => addToCart(product)} className='btn btn-primary'>Add to Cart</button>
                        </li><br /></>
                    ))}
                </ul>

            </div>
        </>
    );
};

export default ProductList;