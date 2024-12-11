import React, { useState, useEffect } from 'react'
import ClientReview from './ClientReview'

const Testimonials = () => {
    const [review, setReview] = useState([])

    const getReviews = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()

        setReview(data)
    }

    useEffect(() => {
        getReviews()
    }, [])

    return (
        <section id="testimonials">
            <div className="container testimonial-container">

                <div>
                    <h2>Clients are <br /> Loving Our App</h2>
                </div>

                <div className="reviews">

                    {
                        review.map((review) => (
                            <ClientReview key={review.id} item={review} />
                        ))
                    }



                </div>
            </div>
        </section>
    )
}

export default Testimonials
