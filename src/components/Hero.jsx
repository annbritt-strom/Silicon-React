import React from 'react'
import AppStore from '../assets/imgs/header/appstore.svg'
import GooglePlayIcon from '../assets/imgs/header/googleplay-icon.svg'
import GetItOn from '../assets/imgs/header/get-it-on.svg'
import Chevron from '../assets/imgs/common/chevron-down.svg'
import MainPhones from '../assets/imgs/header/main-phones.svg'

const Hero = () => {
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
                           <a className="app-store" href="https://www.apple.com/app-store/" target="_blank"><img src={AppStore} /></a>
                        </div>
                              
                        <div className="store-button" role="button">
                           <a className='googleplay' href="https://play.google.com/store/games?hl=en" target="_blank">
                              <div className='googleplay-icon'>
                                 <img src={GooglePlayIcon} />
                              </div>
                              <div className='googleplay-text'>
                                 <img src={GetItOn} />
                              </div>
                           </a>
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

export default Hero
