import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-gray-900 border-t border-gray-800'>
            <div className='container max-w-7xl mx-auto px-4 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <Link href="/" className='text-white text-xl text-bold'>Khoi Do&trade;</Link>
                        <p className='text-white'> © {new Date().getFullYear()} Khoi Do. All rights reserved</p>
                    </div>
                    <div className='flex space-x-4'>
                        <Link href="https://github.com/Ben2104" target="_blank" className='text-2xl text-white hover:text-primary transition-colors duration-300'>
                            <FaGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/hoang-khoi-do/" target="_blank" className='text-2xl text-white hover:text-primary transition-colors duration-300'>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer