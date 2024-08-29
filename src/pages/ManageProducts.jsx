import React, { useState } from 'react'
import ManageProduct from '../components/products/ManageProduct'
import AddProduct from '../components/products/AddProduct'
import EditProduct from '../components/products/EditProduct'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap' // Import Bootstrap components

const ManageProductView = () => {
  const [productToEdit, setProductToEdit] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false) // State for Add Product modal

  const handleEditProduct = (product) => {
    setProductToEdit(product)
  }

  const handleEditComplete = () => {
    setProductToEdit(null)
  }

  // Toggle Add Product modal
  const handleCloseAddModal = () => setShowAddModal(false)
  const handleShowAddModal = () => setShowAddModal(true)

  return (
    <Container className='mt-4'>
      <h1>Manage Products</h1>

      {/* Add Product Button */}
      <Button variant='primary' onClick={handleShowAddModal}>
        Add New Product
      </Button>

      {/* Add Product Modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProduct onClose={handleCloseAddModal} /> {/* Pass onClose to AddProduct */}
        </Modal.Body>
      </Modal>

      {/* Manage Products Section */}
      <Row className='mt-3'>
        <Col>
          <ManageProduct onEditProduct={handleEditProduct} />
        </Col>
      </Row>

      {/* Edit Product Modal */}
      {productToEdit && (
        <Modal show={!!productToEdit} onHide={handleEditComplete}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProduct productToEdit={productToEdit} onEditComplete={handleEditComplete} />
          </Modal.Body>
        </Modal>
      )}
    </Container>
  )
}

export default ManageProductView
