import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className='container h-100'>
        <div className='footer-content'>
          <div className='company-info'>
            <span className='m-0 fs-5 fw-semibold'>MDF</span>
            <p className='m-0 fs-6'>123 Calle Principal, Ciudad, País</p>
          </div>
          <div className='social-links'>
            <h3 className='m-0 fs-5 fw-semibold text-center'>Síguenos en:</h3>
            <ul className='m-0'>
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
          <div className='m-0 footer-bottom d-none d-lg-block'>
            <p className='m-0 fs-6'>&copy; 2024 MDF. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
