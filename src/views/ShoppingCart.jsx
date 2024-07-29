import { useCart } from "../context/CartContext";



const ShoppingCart = () => {

    const { cart } = useCart();
    return (
        <div className="container">
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                    {cart.map(product => (
                        <li key={product.id}>
                            {product.name} - {product.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ShoppingCart;