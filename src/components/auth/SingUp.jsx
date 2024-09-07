import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

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
      <div className='container'>
        {exito && <p>Signed Up!!!</p>}
        <div className='container'>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>

            <input
              type='text'
              className='form-control'
              placeholder='Nombre'
              onChange={(e) => setNombre(e.target.value)}
            />

            <input
              type='text'
              className='form-control'
              placeholder='Apellido'
              onChange={(e) => setApellido(e.target.value)}
            />

            <input
              type='email'
              className='form-control'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type='password'
              className='form-control'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit' className='btn btn-primary'>Sign Up</button>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  )
}
export default SingUp
