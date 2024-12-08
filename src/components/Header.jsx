import React from 'react'
import MainNav from './MainNav'
import Main from './Main'

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
