import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

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
    <div className='container'>
      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <input
              required='{true}?'
              type='email'
              className='form-control'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              required='{true}?'
              type='password'
              className='form-control'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>Sign In</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}
export default SingIn
