import React from 'react';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/iam_rohit_7856/",
      label: "Instagram"
    },
    {
      icon: CiFacebook,
      href: "https://www.Facebook.com",
      label: "Facebook"
    },
    {
      icon: CiLinkedin,
      href: "https://www.Linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: FaSquareXTwitter,
      href: "https://www.XTwitter.com",
      label: "Twitter"
    },
    {
      icon: FaGithubSquare,
      href: "https://github.com/Rohit7878s",
      label: "GitHub"
    },
    {
      icon: SiGmail,
      href: "mailto:srohit1234567@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-gry-900" id="contact">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-300 mt-48">
          CONTACT ME
        </h1>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-300 hover:text-blue-600 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React from 'react'
// import { CiFacebook, CiLinkedin } from 'react-icons/ci'
// import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa6'
// import { SiGmail } from 'react-icons/si'

// const Contact = () => {
//   return (
//     <>
//       <div className='container contact mt-5' id='contact'>
//         <h1 className='text-center'>CONTACT ME</h1>
//         <div className='contact-icon'
//           data-aos="zoom-in-up"
//           data-aos-duration="1000">
//           <a href="https://www.instagram.com/iam_rohit_7856/" target='_blank' className='items'>
//           <FaInstagram className='icons'/>
//           </a>
//           <a href="https://www.Facebook.com" target='_blank' className='items'>
//           <CiFacebook className='icons'/>
//           </a>
//           <a href="https://www.Linkedin.com" target='_blank' className='items'>
//           <CiLinkedin className='icons'/>
//           </a>
//           <a href="https://www.XTwitter.com" target='_blank' className='items'>
//           <FaSquareXTwitter className='icons'/>
//           </a>
//           <a href="https://github.com/Rohit7878s" target='_blank' className='items'>
//           <FaGithubSquare className='icons'/>
//           </a>
//           <a href="mailto:srohit1234567@gmail.com" target='_blank' className='items'>
//           <SiGmail className='icons'/>
//           </a>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Contact
