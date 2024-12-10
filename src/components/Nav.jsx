import React, { useState } from 'react'
import HeaderImg from '../assets/imgs/header/silicon-logo.svg'
import HumanIcon from '../assets/imgs/header/human-icon.svg'

const Nav = () => {

   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleDarkMode = () => {
      const newIsDarkMode = !isDarkMode;
      setIsDarkMode(newIsDarkMode)

      if (newIsDarkMode) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }

   return (
      <div className="container">
         <nav className="main-nav">
            <div className="left-nav">
               <div className='silicon-logo'>
                  <a href="index.html"><img src={HeaderImg} /><p>Silicon</p></a>
               </div>
               <div className='selection'>
                  <a href="#features" className="navigation-text"><p>Contact</p></a>
                  <a href="#features" className="navigation-text"><p>Features</p></a>
               </div>
            </div>

            <div className="right-nav">
               <div className="theme-toggle">
                  <p>Dark Mode</p>
                  <label className="toggle">
                     <input type="checkbox" id="darkmode-toggle" checked={isDarkMode} onChange={toggleDarkMode}  />
                     <span className="slider"></span>
                  </label>
               </div>

               <div id="signup">
                  <button className="btn-with-icon"><img src={HumanIcon} /><p>Sign in / up</p></button>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Nav
