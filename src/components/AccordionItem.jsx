import React, { useState } from 'react'
import Chevron from '../assets/imgs/common/chevron-down.svg'

const AccordionItem = ({ item }) => {
   const [isOpen, setIsOpen] = useState(false)

   const toggleActive = () =>  {
      setIsOpen(!isOpen)
   }

   return (
      <div className={`panel ${isOpen ? 'active' : ''}`} onClick={toggleActive}>
         <div className="question">
            <h3>{item.title}</h3>
            <button className="accordion-button"><img src={Chevron} /></button>
         </div>
         <div className="answer">
            <p className="small-text expandable">{item.content}</p>
         </div>
      </div>
   )
}

export default AccordionItem
