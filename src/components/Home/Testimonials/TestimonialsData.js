import React from 'react';

const TestimonialsData = (props) => {
    const { review } = props;
    return (
        <section className="container">
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 class="card-title">{review.name}</h3>
                        <p class="card-text">{review.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsData;