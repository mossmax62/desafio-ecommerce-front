// src/components/products/ManageProduct.jsx
import { useProducts } from '../../context/ProductContext';
import PropTypes from 'prop-types';


const ManageProduct = ({ onEditProduct }) => {

    const { products, deleteProduct } = useProducts();

    ManageProduct.propTypes = {
        onEditProduct: PropTypes.func.isRequired,
    };
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}
                        <button onClick={() => onEditProduct(product)}>Edit</button>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageProduct;