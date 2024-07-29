import ProductList from "../components/products/ProductList";

const Home = () => {
    return (
        <div className="container">
            <div>
                <h1>Home</h1>
                <p>Welcome to the Home page</p>
                <ProductList />
            </div>
        </div>
    );
}
export default Home;
