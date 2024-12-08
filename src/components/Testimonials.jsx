import React from 'react'
import Quote from '../assets/imgs/testimonials/quote.svg'
import FourStars from '../assets/imgs/testimonials/four-stars.svg'
import FiveStars from '../assets/imgs/testimonials/five-stars.svg'
import FannieSummers from '../assets/imgs/testimonials/Fannie-Summers.svg'
import AlbertFlores from '../assets/imgs/testimonials/Albert-Flores.svg'



const Testimonials = () => {
  return (
   <section id="testimonials">
   <div className="container testimonial-container">

       <div>
           <h2>Clients are <br /> Loving Our App</h2>
       </div>

       <div className="reviews">
           <div className="review">
               <img className="quotation" src={Quote} />
               <div>
                   <img src={FourStars} />
                   <p className="review-text">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                   <div className="customers">
                       <img src={FannieSummers} />
                       <div className="customer">
                           <p className="name">Fannie Summers</p>
                           <p className="title">Designer</p>
                       </div>
                   </div>
               </div>
           </div>
               
           <div className="review">
               <img className="quotation" src={Quote} />
               <div>
                   <img src={FiveStars} />
                   <p className="review-text">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                   <div className="customers">
                       <img src={AlbertFlores} />
                       <div className="customer">
                           <p className="name">Albert Flores</p>
                           <p className="title">Developer</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   </section>
  )
}

export default Testimonials
