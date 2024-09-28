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
      <h2 className='m-0 fs-3'>Lista de productos</h2>
      <div className='row'>
        {products.map((product) => (
          <div key={product.id} className='col-md-3 mb-3'>
            <div className='card'>
              <img src={product.img} alt={product.modelo} className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{product.marca} {product.modelo}</h5>
                <p className='card-text'>Precio: ${product.precio}</p>
                <p className='card-text'>Stock: {product.stock}</p>
                <p className='card-text'>Descripción: {product.descripcion}</p>
                <p className='card-text'>Categoria: {product.categoria}</p>
                <p className='card-text'>Favorito: {product.favorito ? 'Yes' : 'No'}</p>
                <div className='btn-group' role='group'>
                  <button
                    onClick={() => onEditProduct(product)}
                    className='btn btn-sm btn-primary'
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className='btn btn-sm btn-danger'
                  >
                    Eliminar
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
