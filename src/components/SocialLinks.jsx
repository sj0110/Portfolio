import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
// import { RiContactsFill } from "react-icons/ri";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: 'https://www.linkedin.com/in/jainsuyash2003/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          LeetCode <SiLeetcode size={25} />
        </>
      ),
      href: 'https://leetcode.com/u/jainsuyash2003/',
    },
    {
      id: 3,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: 'https://github.com/sj0110',
    },
    {
      id: 4,
      child: (
        <>
          Behance <FaBehanceSquare size={25} />
        </>
      ),
      href: 'https://www.behance.net/suyashjain1',
    },
    {
      id: 5,
      child: (
        <>
          Resume <IoDocumentTextSharp size={25} />
        </>
      ),
      href: 'https://suyash-jain-resume-sde.tiiny.site/',
    },
    // {
    //   id: 6,
    //   child: (
    //     <>
    //       Contact <RiContactsFill size={25} />
    //     </>
    //   ),
    //   href: 'contact',
    //   style: 'rounded-br-md'
    // }
  ];
  return (
    // <div className='hidden xl:block'>
    //   <ul className=' flex flex-col fixed left-0 top-[32%]'>
    //     {/* To avoid code duplication again
    //         <li className='w-40 h-auto px-4 py-3 bg-gray-800 ml-[-100px] transition-all hover:ml-0 hover:rounded-r-md'>
    //             <a href="" className='flex gap-8 text-white justify-center items-center'>
    //                 LinkedIn <FaLinkedin size={25}/>
    //             </a>
    //         </li> */}
    //     {links.map(link => {
    //       // To add additional styles using external styles use below approach
    //       return <li key={link.id} className={'cursor-pointer w-40 h-auto px-4 py-4 bg-gray-800 ml-[-100px] duration-300 hover:ml-0 hover:rounded-r-md' + ' ' + link.style}>
    //         <a href={link.href} target='_blank' rel='noreferrer' className='flex text-white text-sm justify-between items-center'>
    //           {link.child}
    //         </a>
    //       </li>
    //     })}
    //   </ul>
    // </div>
    <>
    {/* Desktop Sidebar */}
    <div className='hidden lg:block'>
        <ul className='flex flex-col fixed left-0 top-[32%]'>
          {links.map(link => (
            <li key={link.id} className={`cursor-pointer w-40 h-auto px-4 py-4 bg-gray-800 ml-[-100px] duration-300 hover:ml-0 hover:rounded-r-md ${link.style}`}>
              <a href={link.href} target='_blank' rel='noreferrer' className='flex text-white text-sm justify-between items-center'>
                {link.child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Menu */}
      <div className='block lg:hidden'>
        <ul className='fixed bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-black via-gray-800 to-gray-800 py-3 px-6 text-sm'>
          {links.map(link => (
            <li key={link.id} className='cursor-pointer'>
              <a 
                href={link.href} 
                target='_blank' 
                rel='noreferrer' 
                className='text-white text-center flex flex-col items-center'
                title={link.child.props.children[0]}
              >
                <div className='flex flex-col gap-1 items-center'>
                  {link.child.props.children[1]}
                  {link.child.props.children[0]}
                </div>
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SocialLinks