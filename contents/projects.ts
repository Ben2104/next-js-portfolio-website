import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'Shape-Sign',
        description: 'Shape-Sign is an interactive application that utilizes hand gesture recognition models to help users learn and engage with sign language.',
        technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Tensorflow', 'Python'],
        githubLink: 'https://github.com/Ben2104/Shape-Sign',
        image: '/projects/shape&sign.png',
    },
    {
        title: 'QuizzRiff',
        description: 'QuizRiff helps educators save time by automating personalized quiz creation and adding a competitive scoring system to keep students engaged in learning.',
        technologies: ['Python', 'HTML', 'CSS', 'SQLite3', 'Flask', 'WolframAlpha API'],
        githubLink: 'https://github.com/Ben2104/QuizzRiff',
        image: '/projects/quizzriff.png',
    },
    {
        title: 'The Bookstore',
        description: 'The Bookstore project is a MERN stack web app with full CRUD functionality for managing books, authors, and collections efficiently.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
        githubLink: 'https://github.com/Ben2104/BookStore',
        image: '/projects/Bookstore.png',
    },
    {
        title: 'LLM Chatbot',
        description: 'LLM Chatbot is an AI-powered chatbot that uses large language models to engage in natural language conversations with users.',
        technologies: [
            'React',
            'Tailwind CSS',
            'Vite',
            'Backend:',
            'Node.js',
            'Express',
            'OpenAI API',
            'Multer'
        ],
        githubLink: 'https://github.com/Ben2104/Chat-Bot',
        image: '/projects/chatbot.png',
    },
    {
        title: 'Pickleball-Booking-Extension',
        description: 'A Chrome Extension that automates court booking at iPickle Cerritos by instantly reserving available courts exactly 7 days in advance at 7:00 AM, streamlining a highly competitive process.',
        technologies: [
            'JavaScript',
            'HTML',
            'CSS',  
        ],
        githubLink: 'https://github.com/Ben2104/Pickleball-Booking-Extension',
        image: '/projects/pickleball.jpg',
    },

];