'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ProfileCard from '@/Reactbits/ProfileCard/ProfileCard'
import { motion } from 'framer-motion'
import { cardHover, fadeInUp, scaleIn } from '@/utils/animation'
const Hero = () => {
    return (
        <section className='py-4 container max-w-7xl mx-auto'>
            <div className='max-w-3xl mx-auto text-center'>
                {/* ProfileCard - smaller size and shifted slightly left */}
                <motion.div
                    {...scaleIn}
                    transition={{ duration: 0.2 }}
                    className='flex justify-center items-center mb-8'>
                    <div className='-ml-24 md:-ml-64'> {/* Now responsive: centered on mobile, shifted left on md+ screens */}
                        <ProfileCard
                            name="Hoang Khoi Do"
                            title="Software Engineer"
                            handle="bendakaydee"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl="/projects/image.png"
                            iconUrl='/projects/icon.png'
                            showUserInfo={true}
                            enableTilt={true}
                            onContactClick={() => window.location.href = '/contact'}
                            behindGradient="none"
                            innerGradient='none'
                            className="max-w-[180px]"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    {...fadeInUp}
                    transition={{ duration: 0.5 }}
                    className='text-4xl md:text-6xl font-bold mb-6'>Hi, I&apos;m <span className='text-primary'>Khoi Do</span></motion.h1>
                <motion.p
                    {...fadeInUp}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='text-xl md:text-2xl text-gray-600 dark:text-gray-300'>A Computer Science student at CSULB with a passion for full-stack development. I love building impactful, user-focused applications from front to back, and I&apos;m working toward becoming a full-stack software engineer.</motion.p>
                <div className='flex justify-center space-x-4 mb-8 mt-4'>
                    <Link href="https://github.com/Ben2104" target="_blank" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/hoang-khoi-do/" target="_blank" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                        <FaLinkedin />
                    </Link>
                </div>
                <motion.div
                    {...fadeInUp}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4'>
                    <motion.div
                        whileHover={cardHover.whileHover}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-auto"
                    >
                        <Link href="/projects" className='bg-primary text-white inline-block w-full px-8 py-3 rounded-lg transition-colors duration-300'>
                            View Projects
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={cardHover.whileHover}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-auto"
                    >
                        <Link href="/contact" className='bg-gray-700 text-white inline-block w-full px-8 py-3 rounded-lg transition-colors duration-300'>
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero