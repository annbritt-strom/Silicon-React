import React, { useState, useEffect } from 'react'
import AccordionItem from './AccordionItem'
import Contact from './Contact'


const Faq = () => {
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
   <section id="FAQ">
   <div className="container">

      <Contact />
      <div className="accordions">
         {
            accordions.map(item => (
               <AccordionItem key={item.id} item={item} />
            ))
         }
      </div>

   </div>
   </section>
  )
}

export default Faq
