import React from 'react'
import ACS from '../assets/adobe-creative-suite.png'
import BS from '../assets/bootstrap.png'
import C from '../assets/c-logo.png'
import CSS from '../assets/css.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import HTML from '../assets/html.png'
import JS from '../assets/javascript.png'
import MySQL from '../assets/mysql.png'
import RT from '../assets/react.png'
import SQL from '../assets/sql.png'
import TW from '../assets/tailwind.png'
import WP from '../assets/wordpress.png'
import NJ from '../assets/nextjs.png'
import N from '../assets/node.png'
import EJS from '../assets/expressjs.png'
import {motion} from 'motion/react'

const Experience = () => {
    const langs = [
        
        { id: 13, name: 'NextJS', src: NJ, shadow: 'shadow-[#ffffff]' },  // NextJS white
        { id: 12, name: 'React', src: RT, shadow: 'shadow-[#61dafb]' },         // React blue
        { id: 11, name: 'ExpressJS', src: EJS, shadow: 'shadow-[#ffffff]' },    //Express White
        { id: 10, name: 'NodeJS', src: N, shadow: 'shadow-[#8CC74C]' },       // Node green
        { id: 9, name: 'Tailwind CSS', src: TW, shadow: 'shadow-[#38b2ac]' },// Tailwind teal
        { id: 8, name: 'Bootstrap', src: BS, shadow: 'shadow-[#7952b3]' },   // Bootstrap purple
        { id: 7, name: 'HTML', src: HTML, shadow: 'shadow-[#e34c26]' },      // HTML5 orange
        { id: 6, name: 'CSS', src: CSS, shadow: 'shadow-[#264de4]' },        // CSS blue
        { id: 5, name: 'JavaScript', src: JS, shadow: 'shadow-[#f7df1e]' },  // JavaScript yellow
        { id: 4, name: 'Git/GitHub', src: git, shadow: 'shadow-[#f05033]' },        // Git orange
        { id: 3, name: 'SQL/MySQL', src: SQL, shadow: 'shadow-[#DB7432]' },       // SQL blue (same as MySQL)
        { id: 2, name: 'C/C++', src: C, shadow: 'shadow-[#a8b9cc]' },  // C language gray
        { id: 1, name: 'WordPress', src: WP, shadow: 'shadow-[#21759b]' },  // WordPress blue

    ];
      
    return (
        <div id='experience' className='pt-20 md:pt-0 min-h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black flex justify-center items-center px-8'>
            <motion.div 
                className='max-w-screen-lg mx-auto flex flex-col gap-20'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <div className='flex flex-col gap-8'>
                    <motion.h2 
                        className='text-2xl text-white font-bold w-fit border-b-4 border-white sm:text-4xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >Experience</motion.h2>
                    <motion.p 
                        className='text-gray-500 md:text-xl text-justify'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Curated list of the programming languages, web-frameworks, tools & libraries I have worked upon in past during working upon my projects.
                    </motion.p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8'>
                    {langs.map(lang => (
                        <motion.div 
                            key={lang.id} 
                            className={`duration-200 hover:scale-105 shadow-md rounded-lg ${lang.shadow}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className='py-4 flex flex-col justify-center items-center gap-4 text-center max-w-xs'>
                                <img src={lang.src} alt={lang.name} className='w-20 rounded-md' loading='lazy' />
                                <p className='text-white break-words max-w-32'>{lang.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Experience