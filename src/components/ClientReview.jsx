import React from 'react'
import StarRating from './StarRating'
import Quote from '../assets/imgs/testimonials/quote.svg'

const ClientReview = ({item}) => {
   return (
      <div className="review">
         <img className="quotation" src={Quote} />
         <div>
            <StarRating starRating={item.starRating} />
            <p className="review-text">{item.comment}</p>
            <div className="customers">
               <img src={item.avatarUrl} alt={item} />
               <div className="customer">
                  <p className="name">{item.author}</p>
                  <p className="title">{item.jobRole}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ClientReview
