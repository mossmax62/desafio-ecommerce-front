import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import './SingUp.css'

let exito = false

const SingUp = () => {
  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // await auth.createUserWithEmailAndPassword(email, password);
      const result = await signup(nombre, apellido, email, password)
      if (result) {
        exito = true
        navigate('/user-profile')
      }
    } catch (error) {
      setError(error.message)
      exito = false
      console.log(error.message)
    }
  }

  return (
    <>
      <div className='container sign-up-container vh-100 d-flex justify-content-center align-items-center'>
        {exito && <p>Signed Up!!!</p>}
        <div className='row rounded h-75 w-100'>
          <div className='col-md-6 col-sm-12 border-end border-secondary'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100'>
              <h1 className='m-0 fs-1 product-list-h1 text-uppercase'>Registrate</h1>
              <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                <div>
                  <label for='nameInput' class='form-label'>Nombre</label>
                  <input
                    type='text'
                    id='nameInput'
                    className='form-control'
                    placeholder='Nombre'
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div>
                  <label for='lastNameInput' class='form-label'>Apellido</label>
                  <input
                    type='text'
                    id='lastNameInput'
                    className='form-control'
                    placeholder='Apellido'
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
                <div>
                  <label for='emailInput' class='form-label'>Email</label>
                  <input
                    type='email'
                    id='emailInput'
                    className='form-control'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label for='passwordInput' class='form-label'>Contraseña</label>
                  <input
                    type='password'
                    id='passwordInput'
                    className='form-control'
                    placeholder='Contraseña'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type='submit' className='btn btn-success m-0 w-100'><i className='bi bi-person-plus-fill' /> Registrarse</button>
              </form>
              {error && <p>{error}</p>}
            </div>
          </div>
          <div className='col-md-6 col-sm-12 d-none d-md-block'>
            <div className='d-flex flex-column justify-content-center align-items-center h-100 gap-3'>
              <h2 className='m-0 fs-3'>¡Únete hoy y descubre el mundo de oportunidades automotrices a tu alcance!</h2>
              <ul class='list-group list-group-flush'>
                <li class='list-group-item'>Con nuestra plataforma, todo el <span className='fw-bold'>proceso de comprar</span>, vender o guardar tus autos favoritos es <span className='fw-bold'>rápido, sencillo y sin complicaciones.</span></li>
                <li class='list-group-item'><span className='fw-bold'>Regístrate ahora</span> y comienza a disfrutar de todos los beneficios de ser parte de nuestra comunidad automotriz.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SingUp
