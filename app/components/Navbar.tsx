"use client"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    
    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: 'projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];
    
    return (
        <nav className='fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800'>
            <div className='container max-w-7xl mx-auto px-4'>
                {/* Desktop menu */}
                <div className='flex items-center justify-between h-16'>
                    <Link
                        href="/"
                        className="text-xl font-bold text-white"
                    >
                        Khoi Do&trade;
                    </Link>

                    {/* Desktop menu items */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`text-lg px-4 py-2 block ${isActive ? 'text-primary' : 'text-gray-300'} hover:bg-gray-700 hover:text-white rounded transition-colors duration-300`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                
                {/* Mobile menu */}
                {
                    isMobileMenuOpen && (
                        <div className='md:hidden bg-gray-900 rounded-b-lg pb-4'>
                            <div className="py-4 space-y-4 px-2">
                                {
                                    menuItems.map((item, index) => (
                                        <div key={index} onClick={() => setIsMobileMenuOpen(false)}>
                                            <Link
                                                href={item.href}
                                                className={`block py-2 text-lg hover:text-primary transition-colors ${pathname === item.href ? 'text-primary' : 'text-gray-300'}`}
                                            >
                                                {item.label}
                                            </Link>
                                        </div>
                                    ))
                                }
                                
                                {/* Resume button - Mobile */}
                                <div className="pt-2">
                                    <a
                                        href='https://drive.google.com/file/d/1R4abjf_f56ZxX3fsMKSTKC0PyBoQURtu/view?usp=sharing'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-lg py-2 px-4 bg-primary text-white rounded text-center hover:bg-blue-700 transition-colors duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar