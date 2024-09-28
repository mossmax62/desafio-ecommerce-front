import ProductList from '../components/products/ProductList'
import PhotoCarousel from '../components/carrusel/Carusel'

const Home = () => {
  return (
    <>
      <div className='container d-flex flex-column'>

        <PhotoCarousel />
        <h2 className='m-0 fs-1 text-center text-uppercase'>Tu próximo auto lo encuentras <span>aquí</span></h2>
        <ProductList />

      </div>
    </>
  )
}
export default Home
