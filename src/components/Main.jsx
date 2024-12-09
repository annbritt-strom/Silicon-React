import React from 'react'
import AppStore from '../assets/imgs/header/appstore.svg'
import GooglePlay from '../assets/imgs/header/googleplay.svg'
import Chevron from '../assets/imgs/common/chevron-down.svg'
import MainPhones from '../assets/imgs/header/main-phones.svg'

const Main = () => {
  return (
      <main>
        <div className="container">
         <div className="hero">
               <div className="main-content">
                  <div className="main-text">
                     <h1>Manage All Your Money in One App</h1>
                     <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                        
                     <div className="download-app-buttons">
                        <div className="store-button" role="button">
                           <a href="https://www.apple.com/app-store/" target="_blank"><img src={AppStore} /></a>
                        </div>
                              
                        <div className="store-button" role="button">
                           <a href="https://play.google.com/store/games?hl=en" target="_blank"><img src={GooglePlay} /></a>
                        </div>
                     </div>
                  </div>

                  <div className="discover-more">
                     <button><img src={Chevron} /></button>
                     <p>Discover more</p>
                  </div>
               </div>
                     
               <div className="hero-img">
                  <img className="phones" src={MainPhones} />
               </div>
                  
            </div>            
         </div>
      </main>
  )
}

export default Main
