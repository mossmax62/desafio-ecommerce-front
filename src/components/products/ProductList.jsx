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
                <div className='container'>
                    <div className='row'>
                        {products.map(product => (
                            <><div key={product.id} className='col-sm-4 card m-2 text-center'>
                                {product.name} - {product.price}
                                &nbsp;
                                <button onClick={() => addToCart(product)} className='btn btn-primary'>Add to Cart</button>
                            </div > <br /></>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};

export default ProductList;