import { useAuth } from '../contexts/AuthContext'

const UserProfile = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <div className='container'>
      <div>
        <h1>User Profile</h1>
        <h2>Bienvenido {currentUser.username}</h2>
      </div>
    </div>
  )
}
export default UserProfile
