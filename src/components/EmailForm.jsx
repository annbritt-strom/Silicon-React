import React from 'react'

const EmailForm = () => {
  return (
   <form className="subscribe-area" noValidate>
      <div className="input-group">
         <input className="form-input" name='email' type="email" placeholder="✉   Your Email" id="newsletter" />
         <button type='submit' id="submit-btn">Subscribe</button>
      </div>
   </form>
  )
}

export default EmailForm
