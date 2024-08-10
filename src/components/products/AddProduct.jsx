// src/components/AddProduct.jsx
import { useState } from 'react';
import { useProducts } from '../../context/ProductContext';

const AddProduct = () => {
    const { addProduct } = useProducts();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ id: Date.now(), name, price });
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button className='btn btn-primary' type="submit">Add</button>
        </form>
    );
};

export default AddProduct;