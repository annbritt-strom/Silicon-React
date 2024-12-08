import React from 'react'
import NotificationBell from '../assets/imgs/newsletter/notification-bell.svg'

const Newsletter = () => {
  return (
    <section id="newsletter">
    <div className="container">

        <div className="subscribe-text">
            <div className="bell"><img src={NotificationBell} /></div>
            <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
        </div>

        <div className="subscribe-area">
            <div className="input-group">
                <input className="form-input" type="text" placeholder="✉   Your Email" id="newsletter" />
                <div className="subscribe-btn">Subscribe</div>
            </div>

        </div>
    </div>
    </section>
  )
}

export default Newsletter
