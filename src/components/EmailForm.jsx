import React from 'react'

const EmailForm = () => {
  return (
   <div className="subscribe-area">
   <div className="input-group">
       <input className="form-input" name='email' type="email" placeholder="✉   Your Email" id="newsletter" />
       <button type='submit' className="subscribe-btn">Subscribe</button>
   </div>
</div>
  )
}

export default EmailForm
