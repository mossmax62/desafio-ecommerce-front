import { useProducts } from '../../context/ProductContext'
import PropTypes from 'prop-types'

const DeleteProduct = ({ id }) => {
  const { deleteProduct } = useProducts()

  return (
    <button onClick={() => deleteProduct(id)}>Delete</button>)
}

DeleteProduct.propTypes = {
  id: PropTypes.number.isRequired
}

export default DeleteProduct
