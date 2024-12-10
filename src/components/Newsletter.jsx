import React from 'react'
import NotificationBell from '../assets/imgs/newsletter/notification-bell.svg'
import EmailForm from './EmailForm'

const Newsletter = () => {
  return (
    <section id="newsletter">
    <div className="container">

        <div className="subscribe-text">
            <div className="bell"><img src={NotificationBell} /></div>
            <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
        </div>

        <EmailForm />
    </div>
    </section>
  )
}

export default Newsletter
