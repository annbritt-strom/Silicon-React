import React from 'react'
import AppFeatures from '../assets/imgs/features-app/app-features.svg'
import PaymentIcon from '../assets/imgs/features-app/payment-icon.svg'
import DataSecurityIcon from '../assets/imgs/features-app/datasecurity-icon.svg'
import StatisticIcon from '../assets/imgs/features-app/statistic-icon.svg'
import SupportIcon from '../assets/imgs/features-app/support-icon.svg'
import CashbackIcon from '../assets/imgs/features-app/cashback-icon.svg'
import TopStandardIcon from '../assets/imgs/features-app/topstandard-icon.svg'

const FeaturesApp = () => {
  return (
   <section id="features-app">
   <div className="container">
       
      <div className="image-container">
         <img src={AppFeatures} />
      </div>
       
      <div className="app-text-container">
         <div className="description">
            <div>
               <h2>App Features</h2>
            </div>
            <div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
         </div>

         <div className="app-text-grid">
            <div className="app-feature-card">
               <div className="card-img"><img src={PaymentIcon} /></div>
               <div className="card-text">
                  <h5>Easy Payments</h5>
                  <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
               </div>
            </div>
               <div className="app-feature-card">
                  <div className="card-img"><img src={DataSecurityIcon} /></div>
                  <div className="card-text">
                     <h5>Data Security</h5>
                     <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                  </div>
               </div>
               <div className="app-feature-card">
                  <div className="card-img"><img src={StatisticIcon} /></div>
                  <div className="card-text">
                     <h5>Cost Statistics</h5>
                     <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                  </div>
               </div>
               <div className="app-feature-card">
                  <div className="card-img"><img src={SupportIcon} /></div>
                  <div className="card-text">
                     <h5>Support 24/7</h5>
                     <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                  </div>
               </div>
               <div className="app-feature-card">
                  <div className="card-img"><img src={CashbackIcon} /></div>
                  <div className="card-text">
                     <h5>Regular Cashback</h5>
                     <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                  </div>
               </div>
               <div className="app-feature-card">
                  <div className="card-img"><img src={TopStandardIcon} /></div>
                  <div className="card-text">
                     <h5>Top Standards</h5>
                     <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                  </div>
               </div>
           </div>
         </div>
   </div>
   </section>
  )
}

export default FeaturesApp
