import { useAuth } from '../../contexts/AuthContext'
import { useProducts } from '../../contexts/ProductContext'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

const DeleteProduct = ({ id }) => {
  const { deleteProduct } = useProducts()
  const { token } = useAuth()

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id, token)
          Swal.fire({
            title: 'Eliminado',
            text: 'El producto ha sido eliminado correctamente.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
        } catch (error) {
          Swal.fire({
            title: 'Error',
            text: 'No se pudo eliminar el producto.',
            icon: 'error'
          })
        }
      }
    })
  }

  return <button onClick={handleDelete}>Delete</button>
}

DeleteProduct.propTypes = {
  id: PropTypes.number.isRequired
}

export default DeleteProduct
