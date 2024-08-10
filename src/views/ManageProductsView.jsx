// src/views/ManageProductsView.jsx
import ManageProduct from "../components/products/ManageProduct";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
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
        <div>
            <h1>Manage Products</h1>
            <ManageProduct onEditProduct={handleEditProduct} />
            <AddProduct />
            {/* Render EditProduct only when productToEdit is not null */}
            {productToEdit && <EditProduct productToEdit={productToEdit} onEditComplete={handleEditComplete} />}
        </div>
    );
}
export default ManageProductView;
