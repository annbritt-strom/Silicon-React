import React from 'react'
import CallUs from '../assets/imgs/faq/call-us.svg'
import MessageUs from '../assets/imgs/faq/message-us.svg'
import PurpleArrow from '../assets/imgs/faq/arrow-right-p.svg'
import GreenArrow from '../assets/imgs/faq/arrow-right-g.svg'

const Contact = () => {
  return (
   <div className="contact">
      <div className="contact-text">
         <h2>Any questions? <br /> Check out the FAQs</h2>
         <p className="large-text">Still have unanswered questions and need to get in touch?</p>
      </div>
      
      <div className="contact-selection">
         <div className="contact-type call">
            <img className="padding-bottom-regular" src={CallUs} />
            <p className="small-text padding-bottom-small">Still have questions?</p>
            <button className="medium-text">Contact us <img src={PurpleArrow} /></button>
         </div>
         <div className="contact-type message">
            <img className="padding-bottom-regular" src={MessageUs} />
            <p className="small-text padding-bottom-small">Don't like phone calls?</p>
            <button className="medium-text">Contact us <img src={GreenArrow} /></button>
         </div>  
      </div>
   </div>
  )
}

export default Contact
