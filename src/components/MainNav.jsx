import React from 'react'
import HeaderImg from '../assets/imgs/header/silicon-logo.svg'
import HumanIcon from '../assets/imgs/header/human-icon.svg'

const MainNav = () => {
  return (
      <div className="container">
         <nav className="main-nav">
            <div className="left-nav">
               <a href="index.html"><img src={HeaderImg} /></a>
               <a href="#features" className="navigation-text"><p>Features</p></a>
            </div>

            <div className="right-nav">
               <div className="theme-toggle">
                  <p>Dark Mode</p>
                  <label className="toggle">
                        <input type="checkbox" id="darkmode-toggle" />
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

export default MainNav
