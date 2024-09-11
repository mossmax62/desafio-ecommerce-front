import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='navbar navbar-dark bg-primary'>
      <div className='footer-content'>
        <div className='company-info'>
          <h2>MDF</h2>
          <p>123 Calle Principal, Ciudad, País</p>
        </div>
        <div className='social-links'>
          <h3>Síguenos en:</h3>
          <ul>
            <li>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 MDF. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
