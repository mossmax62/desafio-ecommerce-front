import ProductList from '../components/products/ProductList'

const Home = () => {
  return (
    <>
      <div className='container'>

        <h2>Tu próximo auto, más cerca de lo que imaginas.</h2>

        <h3>Current products</h3>

        <ProductList />

      </div>
    </>
  )
}
export default Home
