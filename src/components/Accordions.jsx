import React, { useState, useEffect } from 'react'
import AccordionItem from './AccordionItem'

const Accordions = () => {
   const [accordions, setAccordions] = useState([])

   const fetchAccordion = async () => {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
      const data = await res.json()

      setAccordions(data)
   }

   useEffect(() => {
      fetchAccordion()
   }, [])

   return (
      <div className="accordions">
         {
            accordions.map(item => (
               <AccordionItem key={item.id} item={item} />
            ))
         }
      </div>
   )
}

export default Accordions
