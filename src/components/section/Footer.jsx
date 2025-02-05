import React from 'react'
import { Div } from '../common'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const sections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Jobs", href: "/Jobs" },
        { name: "Contact", href: "/contact-us" },
        { name: "Terms & Condition", href: "/terms" },
        { name: "Cookies", href: "/cookies" },
        { name: "Teams", href: "/teams" },
        { name: "Media", href: "/media" },
        { name: "Advertise", href: "/advertise" },
      ],
    },
   
  ]

 const  social = [
    { name: <FaFacebook className="text-xl" />, href: "https://facebook.com", ariaLabel: "Facebook" },
    { name: <FaTwitter className="text-xl" />, href: "https://twitter.com", ariaLabel: "Twitter" },
    { name: <FaInstagram className="text-xl" />, href: "https://instagram.com", ariaLabel: "Instagram" },
    { name: <FaLinkedin className="text-xl" />, href: "https://linkedin.com", ariaLabel: "LinkedIn" },

 ]

  return (
    <footer className="my-6 text-center md:px-10 px-2  ">
      <Div className="max-w-screen-xl mx-auto bg-[#5e5c5c2b] rounded-4xl md:py-8 py-3 px-4 sm:px-6 lg:px-8">
        {/* Footer Links */}
        <Div className="gap-8 justify-center flex flex-wrap">
          {sections.map((section, index) => (
            <Div key={index} className="w-full   mb-6">
              <ul className={`flex ${index === 0 ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'} space-y-3 sm:space-x-6 text-center justify-center`}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      aria-label={link.ariaLabel}
                      className="hover:text-yellow-300 font-mono text-md md:text-base transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Div>
          ))}
        </Div>
          <Div className={'flex w-full justify-center gap-x-2 md:gap-x-10  '}>
          {social.map((link, linkIndex) => (
                  <li key={linkIndex} className=' flex  '>
                    <a
                      href={link.href}
                      aria-label={link.ariaLabel}
                      className="hover:text-yellow-300    font-mono text-md md:text-base transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
          </Div>
        {/* Copyright */}
        <Div className="mt-8 text-sm text-gray-400">
          <p className="font-mono">&copy;WRC Promoter 2024. All rights reserved.</p>
        </Div>
      </Div>
    </footer>
  )
}

export default Footer
