import React from 'react'

const About = () => {
    return (
        <div id='about' className='pt-20 sm:pt-0 min-h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black flex justify-center items-center px-8'>
            <div className='max-w-screen-lg mx-auto flex flex-col gap-8'>
                <h2 className='text-2xl text-white font-bold w-fit border-b-4 border-white sm:text-4xl'>
                    About me
                </h2>
                <p className='text-gray-500 md:text-xl text-justify'>
                    I’m a detail-oriented person with a logical approach to everything I do, whether it's solving complex problems or designing user-friendly software. My technical expertise spans multiple domains—from programming languages like C/C++ and JavaScript to web engineering frameworks like Tailwind CSS and Bootstrap. I have a deep passion for creating responsive and efficient web applications, which is fueled by my love for improving user experiences.
                    <br />
                    One of my defining traits is the attention I pay to every element of a task. Whether it’s debugging or leading a project, I ensure that all details are accounted for, which allows me to deliver high-quality, optimized solutions. I also bring a fun, relaxed side to my work, balancing technical rigor with humor. And yes, buttermilk happens to be my beverage of choice—keeping me refreshed while coding!
                    <br />
                    I excel in collaboration, guiding teams through projects smoothly and articulating ideas clearly to ensure everyone is aligned. Alongside my technical strengths, I’m focused on continuous learning, and refining my skills in tools like Git, Figma, and MySQL, all of which I leverage to make my projects successful.
                    <br />
                    Anywhere I go, I bring both, the depth of my technical abilities and my unique combination of logical precision, creativity, and a bit of humor to the team.
                </p>
            </div>
        </div>

    )
}

export default About