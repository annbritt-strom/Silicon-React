import React from 'react'
import Chevron from '../assets/imgs/common/chevron-down.svg'

const Accordions = () => {
  return (
      <div className="accordions">
      <div className="panel">
         <div className="question">
            <h3>Is any of my personal information stored in the App?</h3>
            <button className="accordion-button"><img src={Chevron} /></button>
         </div>
      </div>
      <div className="panel">
         <div className="question">
            <h3>What formats can I download my transaction history in?</h3>
            <button className="accordion-button"><img src={Chevron} /></button>
         </div>
      </div>
      <div className="panel">
         <div className="question">
            <h3>Can I schedule future transfers?</h3>
            <button className="accordion-button active"><img src={Chevron} /></button>
         </div>
         <div className="answer">
            <p className="small-text">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
         </div>
      </div>
      <div className="panel">
         <div className="question">
            <h3>When can I use Banking App services?</h3>
            <button className="accordion-button"><img src={Chevron} /></button>
         </div>
      </div>
      <div className="panel">
         <div className="question">
            <h3>Can I create my own password that is easy for me to remember?</h3>
            <button className="accordion-button"><img src={Chevron} /></button>
         </div>
      </div>
      <div className="panel">
         <div className="question">
            <h3>What happens if I forget or lose my password?</h3>
            <button className="accordion-button"><img src={Chevron} /></button>
         </div>
      </div>
      </div>
  )
}

export default Accordions
