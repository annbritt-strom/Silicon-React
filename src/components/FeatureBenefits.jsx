import React from 'react'
import TransferBenefits from '../assets/imgs/feature-benefits/transfer-payment.svg'
import CheckMark from '../assets/imgs/feature-benefits/check-mark.svg'
import ArrowRight from '../assets/imgs/feature-benefits/arrow-right.svg'
import PaymentBenefits from '../assets/imgs/feature-benefits/recieve-payment.svg'
import CreditCard from '../assets/imgs/feature-benefits/credit-card.svg'
import Wallet from '../assets/imgs/feature-benefits/wallet.svg'



const FeatureBenefits = () => {
  return (
   <section id="feature-benefits">
      <div className="container">

         <div className="transfer-money">
            <div className="text-container">
               <h2>Make your money transfer simple and clear</h2>
               <div className="fact"><img src={CheckMark} /><p>Banking transactions are free for you</p></div>
               <div className="fact"><img src={CheckMark} /><p>No monthly cash commission</p></div>
               <div className="fact"><img src={CheckMark} /><p>Manage payments and transactions online</p></div>
               <button>Learn more <img src={ArrowRight} /></button>
            </div>
            <div>
               <img src={TransferBenefits} />
            </div>
         </div>  

         <div className="recieve-payments">
            <div>
               <img src={PaymentBenefits} />
            </div>
            <div className="text-container">
               <h2>Receive payment from international bank details</h2>
               <div className="fact-container">
                  <div className="fact">
                     <div className="icon"><img src={CreditCard} /></div>
                     <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                  </div>
           
                  <div className="fact">
                     <div className="icon"><img src={Wallet} /></div>
                     <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                  </div>
               </div>
               <button>Learn more <img src={ArrowRight} /></button>
            </div>
         </div>
      </div>
   </section>
  )
}

export default FeatureBenefits
