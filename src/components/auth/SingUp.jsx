import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
let exito = false

const SingUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // await auth.createUserWithEmailAndPassword(email, password);
      signup(email, password)
      exito = true
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
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  )
}
export default SingUp
