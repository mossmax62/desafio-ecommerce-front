// src/components/products/ManageProduct.jsx
import { useProducts } from '../../contexts/ProductContext'
import PropTypes from 'prop-types'
import './ManageProduct.css' // Consider adding some CSS for styling

const ManageProduct = ({ onEditProduct }) => {
  const { products, deleteProduct } = useProducts()

  ManageProduct.propTypes = {
    onEditProduct: PropTypes.func.isRequired
  }

  return (
    <div className='manage-product-container'>
      <h2>Product List</h2>
      <div className='row'> {/* Use Bootstrap's grid system */}
        {products.map(product => (
          <div key={product.id} className='col-md-3 mb-3'> {/* Adjust column size as needed */}
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{product.make} {product.model}</h5>
                <p className='card-text'>Price: ${product.price}</p>
                <p className='card-text'>Quantity: {product.quantity}</p>
                <p className='card-text'>Description: {product.description}</p>
                <img src={product.image} alt={product.model} className='card-img-top' />
                <div className='btn-group' role='group'>
                  <button
                    onClick={() => onEditProduct(product)}
                    className='btn btn-sm btn-primary'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className='btn btn-sm btn-danger'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageProduct
