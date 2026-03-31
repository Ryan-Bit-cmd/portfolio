import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope,  } from "react-icons/fa";

const Contactme = () => {
// const InstagramLink = () => {
  return (
    <div>
        <div className=''>
            <h1 className='mb-4'>Contact me  Through the various platforms</h1>
  {/* instagram links */}
    <a className='insta-link  insta-link:hover '
      href="https://www.instagram.com/ryanr_gen/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Visit My Instagram
    </a>
    {/* email link */}
     <a href="mailto:ryanregan356@gmail.com" className="contact-btn email">
          <FaEnvelope /> Email Me
        </a>
        </div>
    </div>
  )
}

export default Contactme