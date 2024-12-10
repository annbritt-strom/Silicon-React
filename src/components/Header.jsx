import React from 'react'
import MainNav from './Nav'
import Main from './Hero'

const Header = () => {
  return (
   <header>
      <div className="gradient-div">
         <MainNav />
         <Main />
      </div>
   </header>
  )
}

export default Header
