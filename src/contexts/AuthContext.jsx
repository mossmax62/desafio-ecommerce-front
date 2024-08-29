// AuthContext.js
import { createContext, useState, useContext, useEffect } from 'react'

import PropTypes from 'prop-types'

const AuthContext = createContext()
const localStorage = window.localStorage

let users = []

try {
  // Attempt to load users from localStorage
  const storedUsers = localStorage.getItem('users')
  if (storedUsers) {
    users = JSON.parse(storedUsers)
  }
} catch (error) {
  console.error('Error loading users from localStorage:', error)
}

export function AuthProvider ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check localStorage for authentication status on mount
    const storedAuth = localStorage.getItem('isAuthenticated')
    return storedAuth ? JSON.parse(storedAuth) : false
  })
  const [currentUser, setCurrentUser] = useState(null) // Store logged-in user

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated))
  }, [isAuthenticated])

  // Login Function
  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    )

    if (user) {
      setIsAuthenticated(true)
      setCurrentUser(user)
      return true // Successful login
    } else {
      throw new Error('Invalid credentials.')
    }
  }

  // Signup Function
  const signup = (username, password) => {
    // Basic validation (add more as needed)
    if (!username || !password) {
      throw new Error('Username and password are required.')
    }

    // Check if the username is already taken
    const existingUser = users.find((user) => user.username === username)
    if (existingUser) {
      throw new Error('Username already taken.')
    }

    const newUser = { username, password }
    users.push(newUser)

    // Update localStorage
    localStorage.setItem('users', JSON.stringify(users))

    setIsAuthenticated(true)
    setCurrentUser(newUser)
    return true // Successful signup
  }

  const logout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup, currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  return useContext(AuthContext)
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}
