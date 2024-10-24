import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; // Icons from react icons font awesome library
import {Link} from 'react-scroll' // Smooth-Scroll effect for react

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
        <div id='navbar' className='text-white w-full h-20 bg-black flex justify-between items-center px-8 fixed z-10'>
            <div>
                <h1 className='font-signature text-5xl'>Suyash</h1>
            </div>
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
                {
                    links.map(({ id, link }) => {
                        return <li key={id} className='text-gray-500 font-medium pl-8  cursor-pointer capitalize duration-200 hover:scale-105 hover:text-white'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    })
                }
            </ul>
            <div className='cursor-pointer flex z-10 text-gray-500 md:hidden' onClick={() => { setNav(!Nav) }}>
                {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                {/* Can define the size of icons within the react-icon itself */}
            </div>
            {Nav && (
            <ul className='flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-500 w-full h-screen absolute top-0 left-0'>
                {
                    links.map(({ id, link }) => {
                        return <li key={id} className='text-gray-500 bg-transparent first-line:text-4xl justify-center items-center font-medium py-8  cursor-pointer capitalize duration-200 hover:scale-105 hover:text-white'><Link to={link} smooth duration={500} onClick={() => { setNav(!Nav) }}>{link}</Link></li>
                    })
                }
            </ul>
            )}
        </div>
    )
}

export default Navbar