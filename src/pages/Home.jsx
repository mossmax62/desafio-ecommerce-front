import ProductList from '../components/products/ProductList'

const Home = () => {
  return (
    <>
      <div className='container'>

        <h2>Welcome to the Marketplace</h2>

        <h3>Current products</h3>

        <ProductList />

      </div>

    </>
  )
}
export default Home
