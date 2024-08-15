import { useProducts } from '../../contexts/ProductContext';
import { useCart } from '../../contexts/CartContext';
import './ProductList.css'



const ProductList = () => {
    const { products } = useProducts();
    console.log(products);
    const { addToCart } = useCart();

    return (
        <>
            <div>
                <h2>Product List</h2>
                <div className='container'>
                    <div className='product-list'>
                        <div className='row'>
                            {products.map(product => (
                                <><div key={product.id} className='col-sm-2 card m-2 text-center'>

                                    <div className='card-title'>
                                        <h3>{product.make}</h3>
                                        <h2>{product.model}</h2>
                                    </div>
                                    <div className='card-body'>
                                        <img className='card-img-top' src={product.image} alt={product.model} />
                                    </div>
                                    <div className='card-text'>
                                        $ {product.horsepower}
                                    </div>
                                    &nbsp;
                                    <button onClick={() => addToCart(product)} className='btn btn-primary'>Add to Cart</button>
                                </div > <br /></>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ProductList;