'use client'
import React from 'react'
import { FaCode, FaLaptop, FaLaptopCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { scaleIn, cardHover } from '@/utils/animation'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20 px-4'>
      <motion.h1
        {...scaleIn}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold mb-8 text-center'>
        About Me
      </motion.h1>

      {/* bio section */}
      <motion.section
        {...scaleIn}
        transition={{ duration: 0.5 }}
        className='mb-16'>
        <p className='text-gray-300 text-lg max-w-3xl mx-auto text-center'>
          I&apos;m a passionate computer science student focused on building user-friendly, impactful applications. My journey in tech began with web development and has since evolved to include a wide range of programming languages and frameworks. Currently, I&apos;m a Computer Science student at California State University, Long Beach, committed to becoming a skilled and well-rounded software engineer.
        </p>
      </motion.section>

      {/* skills section */}
      <motion.section
        {...scaleIn}
        transition={{ duration: 0.5 }}
        className='mb-16'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <motion.div
            {...scaleIn}
            transition={{ duration: 0.3 }}
            whileHover={cardHover.whileHover}
            className='bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer'>
            <FaCode className='h-8 w-8 mb-4 text-primary' />
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-gray-300 space-y-2'>
              <li>React/ Next.js</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>HTML/CSS</li>
            </ul>
          </motion.div>

          <motion.div
            {...scaleIn}
            transition={{ duration: 0.3 }}
            whileHover={cardHover.whileHover}
            className='bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer'>
            <FaLaptop className='h-8 w-8 mb-4 text-primary' />
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-gray-300 space-y-2'>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </motion.div>

          <motion.div
            {...scaleIn}
            transition={{ duration: 0.3 }}
            whileHover={cardHover.whileHover}
            className='bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer'>
            <FaLaptopCode className='h-8 w-8 mb-4 text-primary' />
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-gray-300 space-y-2'>
              <li>Git</li>
              <li>Postman</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Experiences section */}
      <motion.section
        {...scaleIn}
        transition={{ duration: 0.5 }}
        className='mb-16'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Experiences</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <motion.div
            {...scaleIn}
            transition={{ duration: 0.3 }}
            whileHover={cardHover.whileHover}
            className='bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer'>
            <h3 className='text-xl font-semibold mb-2'>Teaching Assistant</h3>
            <p className='text-primary mb-2'>De Anza College • Sept 2023 - June 2024</p>
            <ul className='text-gray-300 space-y-2 list-disc list-inside'>
              <li>Assisted professors in planning and delivering instructional content for Beginning Programming Methodologies in
                C++, helping students grasp fundamental concepts.</li>
              <li>Conducted review sessions, provided one-on-one tutoring, and facilitated group discussions to enhance student
                understanding..</li>
              <li>Evaluated labs, assignments, quizzes, and exams, providing constructive feedback to students and instructor to support
                academic growth.</li>
            </ul>
          </motion.div>
        </div>
        <div className='mt-16 max-w-3xl mx-auto space-y-8'>
          <motion.div
            {...scaleIn}
            transition={{ duration: 0.3 }}
            whileHover={cardHover.whileHover}
            className='bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer'>
            <h3 className='text-xl font-semibold mb-2'>Computer Technical Support Volunteer</h3>
            <p className='text-primary mb-2'>De Anza College • Dec 2023 – June 2024</p>
            <ul className='text-gray-300 space-y-2 list-disc list-inside'>
              <li>Installed, configured, and maintained various hardware and software systems to ensure seamless functionality and
                performance</li>
              <li>Refurbished and repaired outdated laptops by replacing defective components, optimizing system performance, and
                reinstalling necessary software.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Education section */}
      <motion.section
        {...scaleIn}
        transition={{ duration: 0.5 }}
        className='mb-16'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Education</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <motion.div
            {...scaleIn}
            transition={{ duration: 0.3 }}
            whileHover={cardHover.whileHover}
            className='bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer'>
            <h3 className='text-xl font-semibold mb-2'>Associate Degree in Computer Science</h3>
            <p className='text-primary mb-2'>De Anza College • Spring 2022 - Spring 2024</p>
          </motion.div>
        </div>
        <div className='mt-16 max-w-3xl mx-auto space-y-8'>
          <motion.div
            {...scaleIn}
            transition={{ duration: 0.3 }}
            whileHover={cardHover.whileHover}
            className='bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer'>
            <h3 className='text-xl font-semibold mb-2'>Bachelors&apos; Degree in Computer Science</h3>
            <p className='text-primary mb-2'>California State University of Long Beach • Graduation Expected: Spring 2026</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default About