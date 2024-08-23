import React from 'react'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
  return (
    <>
      <div className='container contact' id='contact'>
        <h1>CONTACT ME</h1>
        <div className='contact-icon'
          data-aos="zoom-in-up"
          data-aos-duration="1000">
          <a href="https://www.instagram.com/iam_rohit_7856/" target='_blank' className='items'>
          <FaInstagram className='icons'/>
          </a>
          <a href="https://www.Facebook.com" target='_blank' className='items'>
          <CiFacebook className='icons'/>
          </a>
          <a href="https://www.Linkedin.com" target='_blank' className='items'>
          <CiLinkedin className='icons'/>
          </a>
          <a href="https://www.XTwitter.com" target='_blank' className='items'>
          <FaSquareXTwitter className='icons'/>
          </a>
          <a href="https://github.com/Rohit7878s" target='_blank' className='items'>
          <FaGithubSquare className='icons'/>
          </a>
          <a href="mailto:srohit1234567@gmail.com" target='_blank' className='items'>
          <SiGmail className='icons'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
