import React, { useEffect, useState } from 'react';
import TestimonialsData from './TestimonialsData';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(' https://morning-chamber-79854.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <section className="container text-center">
            <h1 className="text-center mb-5 text-success" style={{ marginTop: '100px' }}>TESTIMONIALS</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review => <TestimonialsData review={review}></TestimonialsData>)
                }
            </div>
        </section>
    );
};

export default Testimonials;