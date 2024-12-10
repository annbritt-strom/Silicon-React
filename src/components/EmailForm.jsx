import React, {useState} from 'react'

const EmailForm = () => {
   const [emailData, setEmailData] = useState('')
   const [error, setError] = useState('')
   const [submitted, setSubmitted] = useState(false)

   const handleChange = (e) => {
      const value = e.target.value
      setEmailData(value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
      if (!emailRegex.test(emailData)) {
         setError('Enter a valid email.')
      } else {
         setError('')
         alert('Thanks for subscribing.')
      }

   }

   return (
      <form onSubmit={handleSubmit} className="subscribe-area" >
         <div className="input-group">
            <input className="form-input" name='email' onChange={handleChange} placeholder="✉   Your Email" id="newsletter" />
            <button type='submit' id="submit-btn">Subscribe</button>
         </div>

         <span>{error}</span>

      </form>
   )
}

export default EmailForm
