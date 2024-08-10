// src/components/ProductList.jsx
//import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';



const ProductList = () => {
    const { products } = useProducts();
    const { addToCart, removeFromCart } = useCart();

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ProductList;