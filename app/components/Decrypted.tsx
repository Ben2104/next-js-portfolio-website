"use client"
import React from 'react'
import DecryptedText from '@/Reactbits/DecryptedText/DecryptedText'
import { motion } from 'framer-motion'
import { fadeInDown } from '@/utils/animation'

const Decrypted = () => {
    const pressStartStyle = {
        fontFamily: 'var(--font-press-start)'
    };

    // No need for animation key state or useEffect interval anymore
    
    return (
        <motion.div 
        {...fadeInDown}
        transition={{ duration: 0.5 }}
        className='text-left ml-4 md:ml-52 ' style={{ marginTop: '4rem' }}>
            <div className="mb-8">
                <DecryptedText
                    text="Welcome to my portfolio"
                    animateOn="view"
                    revealDirection="center"
                    speed={90}
                    maxIterations={50}
                    className='text-2xl md:text-4xl font-bold text-gray-800 dark:text-white'
                    encryptedClassName='text-2xl md:text-4xl font-bold text-gray-800 dark:text-white'
                    style={pressStartStyle}
                    parentClassName='text-2xl md:text-4xl'
                />
            </div>

            <div className="mb-8">
                <DecryptedText
                    text="My name is..."
                    animateOn="view"
                    revealDirection="center"
                    speed={110}
                    maxIterations={50}
                    className='text-2xl md:text-4xl font-bold text-gray-800 dark:text-white'
                    encryptedClassName='text-2xl md:text-4xl font-bold text-gray-800 dark:text-white'
                    style={pressStartStyle}
                    parentClassName='text-2xl md:text-4xl'
                />
            </div>

            <div className="mb-4">
                <DecryptedText
                    text="Khoi Do"
                    animateOn="view"
                    revealDirection="center"
                    speed={150}
                    maxIterations={50}
                    className='text-2xl md:text-4xl font-bold text-gray-800 dark:text-white'
                    encryptedClassName='text-2xl md:text-4xl font-bold text-gray-800 dark:text-white'
                    style={pressStartStyle}
                    parentClassName='text-2xl md:text-4xl'
                />
            </div>
        </motion.div>
    )
}

export default Decrypted