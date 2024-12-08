import React from 'react'
import MyBudget from '../assets/imgs/slider/web-mybudget.svg'
import YourCards from '../assets/imgs/slider/web-yourcards.svg'
import Transfer from '../assets/imgs/slider/web-transfer.svg'

const Slider = () => {
  return (
   <section id="slider">
      <div className="container">
         <h2>How Does It Work?</h2>
         <div className="image-container">
            <img src={MyBudget} />
            <img src={YourCards} />
            <img src={Transfer} />
         </div>

         <h4>Latest transaction history</h4>
         <p className="medium-text">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>

      </div>
   </section>
   )
}

export default Slider
