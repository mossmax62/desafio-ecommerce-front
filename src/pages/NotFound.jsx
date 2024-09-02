import Foto from '../assets/img/not found.png'

const NotFound = () => {
  return (
      <>
        <div className='notFound'>
          <h1>¡Lo sentimos!</h1>
          <p>No pudimos encontrar el auto que buscas</p>
          <img src={Foto} width={500} alt='foto de auto' />
        </div>
      </>
  )
}

export default NotFound
