// src/views/ManageProductsView.jsx
import ManageProduct from "../components/Products/ManageProduct";
import AddProduct from "../components/Products/AddProduct";
import EditProduct from "../components/Products/EditProduct";
import { useState } from "react";


const ManageProductView = () => {
    const [productToEdit, setProductToEdit] = useState(null);

    const handleEditProduct = (product) => {
        setProductToEdit(product);
    };

    const handleEditComplete = () => {
        setProductToEdit(null);
    };
    return (
        <div className="container">
            <h1>Manage Products</h1>
            <ManageProduct onEditProduct={handleEditProduct} />
            <AddProduct />
            {/* Render EditProduct only when productToEdit is not null */}
            {productToEdit && <EditProduct productToEdit={productToEdit} onEditComplete={handleEditComplete} />}
        </div>
    );
}
export default ManageProductView;
