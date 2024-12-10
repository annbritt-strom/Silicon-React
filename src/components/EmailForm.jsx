import React from 'react'
// import React, {useState} from 'react'

const EmailForm = () => {

   return (
   <form className="subscribe-area" >
      <div className="input-group">
         <input className="form-input" name='email' placeholder="✉   Your Email" id="newsletter" />
         <button type='submit' id="submit-btn">Subscribe</button>
      </div>

      <span></span>

   </form>
  )
}

export default EmailForm
