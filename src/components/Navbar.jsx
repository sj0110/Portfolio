import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; // Icons from react icons font awesome library
import {Link} from 'react-scroll' // Smooth-Scroll effect for react
import { motion } from 'motion/react';

const Navbar = () => {

    const [Nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },
    ]
    return (
                
        <motion.div 
            id='navbar' 
            className='text-white w-full h-20 bg-black flex justify-between items-center px-8 fixed z-10'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className='font-signature text-5xl'>Suyash</h1>
            
            <ul className="hidden md:flex mr-2">
                {/* <li className='text-gray-500 font-medium px-4 cursor-pointer capitalize hover:scale-105 duration-200'>Home</li>
                <li className='text-gray-500 font-medium px-4 cursor-pointer capitalize hover:scale-105 duration-200'>Home</li>
                <li className='text-gray-500 font-medium px-4 cursor-pointer capitalize hover:scale-105 duration-200'>Home</li>
                <li className='text-gray-500 font-medium px-4 cursor-pointer capitalize hover:scale-105 duration-200'>Home</li> */}
                {/* This is an alternate better way of defining 4 links instead of repetitive code define an array of links
                {links.map((link) => {
                    return <li key={links.id} className='text-gray-500 font-medium px-4 cursor-pointer capitalize hover:scale-105 duration-200'>{links.link}</li>
                })
                } */}
                {links.map(({ id, link }) => (
                    <motion.li 
                        key={id} 
                        className='text-gray-500 font-medium pl-8 cursor-pointer capitalize duration-200 hover:scale-105 hover:text-white'
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </motion.li>
                ))}
            </ul>
            
            <div className='cursor-pointer flex z-10 text-gray-500 md:hidden' onClick={() => setNav(!Nav)}>
                {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            
            {Nav && (
                <motion.ul 
                    className='flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-500 w-full h-screen absolute top-0 left-0'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {links.map(({ id, link }) => (
                        <motion.li 
                            key={id} 
                            className='text-gray-500 text-4xl font-medium py-8 cursor-pointer capitalize duration-200 hover:scale-105 hover:text-white'
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link to={link} smooth duration={500} onClick={() => setNav(!Nav)}>{link}</Link>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </motion.div>
    )
}

export default Navbar