import ProductList from '../components/products/ProductList'
import PhotoCarousel from '../components/carrusel/Carusel'

const Home = () => {
  return (
    <>
      <div className='container'>

        <PhotoCarousel />

        <ProductList />

      </div>
    </>
  )
}
export default Home
