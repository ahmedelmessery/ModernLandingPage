import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "motion/react"
import { fadeIn } from '../utils/motion';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        {label: 'Home',href: '#home'},
        {label: 'About Us',href: '#about'},
        {label: 'Our Services',href: '#services'},
        {label: 'Testimonials',href: '#testimonials'},
    ]
  return (
    <motion.nav 
    variants= {fadeIn('down', 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }}
    className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-100 shadow-sm bg-white/90'>
       <div className="w-full container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}        
        <div className='flex items-center gap-1 curser-pointer'>
            <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
            <div className='w-4 h-4 -ml-2 bg-red-500 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div>
        </div>

        {/* dESKTOP Menu Items */}
            <div className='hidden md:flex items-center gap-10'>
                {navItems.map((link,index) => (
                    <a href={link.href} key={index}
                    onClick={()=> setActiveLink(link.href)}
                    className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0  after:h-0.5 hover:after:w-full  after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out
                         ${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'} `}
                    >
                        {link.label}
                    </a>
                ))}

            </div>
                

        {/*  Button */}
                <button className='text-sm font-medium hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-100'>
                    <a href="#newsletter">Get in touch</a>
                </button>
        
           
        {/* Mobile Menu Button */}
        <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                {
                    isMenuOpen? <HiX  className='size-6 cursor-pointer'/> : <HiMenu className='size-6 cursor-pointer'/>
                }
        </button>
       </div>

        {/* Mobile Menu items */}
        {
            isMenuOpen &&(
                <div className='md:hidden border-t border-gray-100 bg-white'>
                    <div className='container mx-auto px-4 space-y-3'>
                        {navItems.map((link,i)=> (
                            <a key={i}
                            onClick={()=>{
                                setActiveLink(link.href)
                                setIsMenuOpen(false)
                            }}
                             className={`block py-2 text-sm font-medium ${activeLink === link.href ? 'text-blue-500':
                                'text-gray-500 hover:text-gray-900'}`} href={link.href}>{link.label}</a>
                        ))}
                    <button className='text-sm font-medium w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-100'>
                    <a href="#newsletter">Get in touch</a>
                    </button>
                    </div>
                </div>
            )
         }
    </motion.nav>
  )
}

export default Navbar