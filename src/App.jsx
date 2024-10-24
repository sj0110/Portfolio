// import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {

  return (
    <>
    {/* bg-gradient-to-b from-black via-black to-gray-800 */}
      <div>
        <Navbar/>
        <Home/>
        <SocialLinks/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default App
