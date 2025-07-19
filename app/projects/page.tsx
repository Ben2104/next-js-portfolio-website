'use client'
import React from 'react'
import {projects} from '@/contents/projects'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { cardHover, fadeIn, scaleIn } from '@/utils/animation'

const Projects = () => {
    return (
        <div className="container max-w-7xl mx-auto py-20 px-4">
            <motion.h1 
            {...scaleIn}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-center">My Projects</motion.h1>
            <motion.p 
            {...scaleIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 mb-24 text-center">Here are some of my projects. Click on the cards to view the code</motion.p>
            
            <motion.div 
            {...scaleIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                {
                    projects.map((project) => (
                        <Link 
                            href={project.githubLink} 
                            target='_blank' 
                            key={project.title}
                            className='block'
                        >
                            <motion.article 
                                className='bg-gray-800 rounded-lg shadow-md p-6 overflow-hidden cursor-pointer h-full'
                                {...fadeIn}
                                transition={{ duration: 0.1 }}
                                whileHover={cardHover.whileHover}
                            >
                                <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                                    <Image 
                                        src={project.image} 
                                        alt={project.title} 
                                        fill 
                                        className='object-cover transition-transform duration-300 group-hover:scale-105' 
                                        sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw' 
                                    />
                                </div>
                                <h3 className='text-xl font-semibold mb-2 text-white'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {
                                        project.technologies.map((tech) => (
                                            <span key={tech} className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className='flex gap-4 mt-2'>
                                    <div className='flex items-center gap-2 text-gray-300 hover:text-primary transition-colors'>
                                        <FaGithub className='w-5 h-5' /> <span>Code</span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Projects;