import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import './SingIn.css'

const SingIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      // await auth.signInWithEmailAndPassword(email, password);
      const loginSuccessful = await login(email, password)
      console.log(loginSuccessful)
      if (loginSuccessful) {
        // Login was successful, navigate to user profile
        navigate('/user-profile')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='container sign-in-container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row rounded h-75 w-100'>
        <div className='col-md-6 col-sm-12 border-end border-secondary'>
          <div className='d-flex flex-column justify-content-center align-items-center h-100 gap-3'>
            <h1 className='m-0 fs-1 product-list-h1 text-uppercase'>Inicia sesión</h1>
            <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
              <div>
                <label for='emailInput' class='form-label'>Email</label>
                <input
                  required='{true}?'
                  type='email'
                  className='form-control'
                  id='emailInput'
                  placeholder='Ingresa tu correo electrónico'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label for='passwordInput' class='form-label'>Contraseña</label>
                <input
                  required='{true}?'
                  type='password'
                  id='passwordInput'
                  className='form-control'
                  placeholder='Ingresa tu contraseña'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-success m-0 w-100'><i className='bi bi-box-arrow-in-right' /> Ingresar</button>
            </form>
            {error && <p>{error}</p>}
          </div>
        </div>
        <div className='col-md-6 col-sm-12 d-none d-md-block'>
          <div className='d-flex flex-column justify-content-center align-items-center h-100 gap-3'>
            <h2 className='m-0 fs-3'>Iniciar sesión en nuestra plataforma te abre las puertas a beneficios exclusivos:</h2>
            <ul class='list-group list-group-flush'>
              <li class='list-group-item'><span className='fw-bold'><i className='bi bi-bag-heart-fill' /> Accede a tus Favoritos:</span> Guarda tus vehículos preferidos y regresa a ellos cuando quieras.</li>
              <li class='list-group-item'><span className='fw-bold'><i className='bi bi-car-front-fill' /> Publica tu Auto:</span> ¿Tienes un vehículo que ya no usas? Publicarlo es fácil y rápido.</li>
              <li class='list-group-item'><span className='fw-bold'><i className='bi bi-person-arms-up' /> Compra tu Nuevo Vehículo:</span> Con nuestra plataforma, tu nuevo compañero de carretera está a solo un clic de distancia.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingIn
