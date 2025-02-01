import React from 'react'
import heroImage from '../assets/heroImage.webp'
import { FaArrowRight } from "react-icons/fa6";
import {Link} from 'react-scroll'

const Home = () => {

    return (
        // This div doesn't require name, but to provide smooth scrolling to it we need to give it a unique name. [pt-12 sm:pt-52 md:pt-0]
        <div id='home' className='pt-20 sm:pt-0 min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center  px-8'>
            <div className='max-w-screen-lg flex flex-col gap-16 justify-center items-center md:flex-row'>
                <div className='flex flex-col justify-center gap-4 h-full'>
                    <h2 className='text-3xl sm:text-5xl font-bold text-white'>
                        I'm a Full Stack Web Developer and UI/UX Designer
                    </h2>
                    <p className='text-gray-500 max-w-md'>I specialize in crafting responsive, user-friendly web applications using React JS, Tailwind CSS, and Bootstrap. With a strong focus on design, I create intuitive and engaging interfaces using Figma, blending creativity with technical expertise for seamless user experiences.</p>
                    <div>
                        <Link to='portfolio' smooth duration={500}>
                        <button className='text-black font-semibold flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#72C6EF] to-[#004E8F] cursor-pointer rounded-2xl group hover:from-[#72C6EF] hover:via-[#72C6EF] hover:to-[#004E8F]'>
                            Portfolio <span className='group-hover:rotate-90 duration-300'><FaArrowRight /></span>
                        </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="Suyash-Jain.png" className='rounded-2xl mx-auto w-2/3 md:w-full' loading='lazy' />
                </div>
            </div>
        </div>
        // <div><img src={heroImage} alt="" /></div>
    )
}

export default Home