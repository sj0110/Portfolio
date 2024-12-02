import React from 'react'
import Netflix from '../assets/Netflix.png'
import Ratify from '../assets/Ratify.png'
import Spotify from '../assets/Spotify.png'
import TaskQ from '../assets/TaskQ.png'
import Twitter from '../assets/Twitter.png'
import UTM from '../assets/UTM.png'
import Quiz from '../assets/quiz.png'

const Portfolio = () => {
    const projects = [
        {
            id: 7,
            src: Quiz,
            alt: 'AI Maturity Tracker - Intent based Quiz App',
            hrefSrc: 'https://github.com/sj0110/quiz-app',
            hrefDemo: 'https://sj0110.github.io/quiz-app/',
            shadow: 'shadow-[#0064FF]'
        },
        {
            id: 6,
            src: TaskQ,
            alt: 'TaskQ - Todo App',
            hrefSrc: 'https://github.com/sj0110/TaskQ-Todo-App---React',
            hrefDemo: 'https://sj0110.github.io/TaskQ-Todo-App---React/',
            shadow: 'shadow-[#475B4F]'
        },
        {
            id: 5,
            src: UTM,
            alt: 'UTM Tracker URL Builder',
            hrefSrc: 'https://github.com/sj0110/UTM-Tracker-URL-Builder',
            hrefDemo: 'https://sj0110.github.io/UTM-Tracker-URL-Builder/',
            shadow: 'shadow-[#FFFFFF]'
        },
        {
            id: 4,
            src: Netflix,
            alt: 'Netflix Responsive UI Clone',
            hrefSrc: 'https://github.com/sj0110/Netflix-Clone',
            hrefDemo: 'https://sj0110.github.io/Netflix-Clone/',
            shadow: 'shadow-[#E50815]'
        },
        {
            id: 3,
            src: Twitter,
            alt: 'Twitter Responsive UI Clone',
            hrefSrc: 'https://github.com/sj0110/Twitter-UI-Clone',
            hrefDemo: 'https://sj0110.github.io/Twitter-UI-Clone/',
            shadow: 'shadow-[#E65451]'
        },
        {
            id: 2,
            src: Spotify,
            alt: 'Spotify Theme Music Player',
            hrefSrc: 'https://github.com/sj0110/Spotify-Music-Player',
            hrefDemo: '',
            shadow: 'shadow-[#1FD560]'
        },
        {
            id: 1,
            src: Ratify,
            alt: 'Ratify - Local Businesses Review Platform',
            hrefSrc: 'https://github.com/adityasahu2003/local-biz/tree/frontend-dev',
            hrefDemo: '',
            shadow: 'shadow-[#87BFC7]'
        }
    ]
    return (
        <div id='portfolio' className='pt-20 sm:pt-0 min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center px-8'>
            <div className='max-w-screen-lg mx-auto flex flex-col gap-20'>
                <div className='flex flex-col gap-8'>
                    <h2 className='text-2xl text-white font-bold w-fit border-b-4 border-white sm:text-4xl'>Portfolio</h2>
                    <p className='text-gray-500 md:text-xl text-justify'>Feel free to explore some of my work right here. In case if you get 'Dangerous Site warning' upon clicking on the link, click on Details &rarr; Visit. These links are genuine! </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
                    {projects.map(project => {
                        return <div key={project.id} className={'shadow-md rounded-lg' + ' ' + project.shadow}>
                        <img src={project.src} alt={project.alt} className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-around p-4 font-bold text-gray-500'>
                            {(project.hrefDemo != '') && <a href={project.hrefDemo} target='_blank' rel='noreferrer'><button className='duration-200 hover:text-white hover:scale-105'>Demo</button></a>}
                            {(project.hrefSrc!= '') && <a href={project.hrefSrc} target='_blank' rel='noreferrer'><button className='duration-200 hover:text-white hover:scale-105'>Code</button></a>}
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio