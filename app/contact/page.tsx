// Fix form inputs by adding name attributes
'use client'
import React, { useState } from 'react';
import Link from "next/dist/client/link";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn, scaleIn } from '@/utils/animation';
interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";
const ContactPage = () => {
    const [formData, setFormdata] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus("success");
            setFormdata({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setStatus("error");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormdata(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="container max-w-7xl mx-auto py-20 px-4">
            <motion.h1 
            {...fadeIn}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-20 text-center">
                Contact Me
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* contact info */}
                <div className="space-y-8">
                    <motion.h2 {...fadeIn} transition={{ duration: 0.5, delay: 0.1}} className="text-2xl font-semibold mb-4">Get in Touch</motion.h2>
                    <motion.p {...fadeIn} transition={{ duration: 0.5, delay: 0.2}} className="text-gray-300 md:w-2/3">I&apos;m always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!</motion.p>
                    <motion.div {...scaleIn} transition={{ duration: 0.5 }} className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="w-6 h-6 text-primary" />
                            <div>
                                <h3 className="font-semibold">Email: </h3>
                                <Link href="mailto:dohoangkhoi341@gmail.com" className="text-gray-300 hover:text-primary">dohoangkhoi341@gmail.com</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhone className="w-6 h-6 text-primary" />
                            <div>
                                <h3 className="font-semibold">Phone: </h3>
                                <Link href="tel:+14088191260" className="text-gray-300 hover:text-primary">+1 (408) 819 1260</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkedAlt className="w-6 h-6 text-primary" />
                            <div>
                                <h3 className="font-semibold">Location: </h3>
                                <p className="text-gray-300">Anaheim, CA</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* contact form */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <motion.form {...scaleIn} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Enter your message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                            ></textarea>
                        </div>
                        <button type='submit' className='w-full bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-md transition-colors duration-300'>
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>

                        {
                            status === "success" && (
                                <p className='text-green-500 text-center'>Message sent successfully!</p>
                            )
                        }

                        {status === "error" && (
                            <p className='text-red-500 text-center'>There was an error sending your message. Please try again.</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;