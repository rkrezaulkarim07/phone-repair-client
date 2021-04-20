import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            description: data.description,
        };

        const url = ` https://morning-chamber-79854.herokuapp.com/addReviews`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    };
    return (
        <section>
            <h3>Review</h3>
            <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'center' }}>
                <h3>Add Service</h3>
                <h6>Service Title</h6>
                <input name="name" class="mb-3" defaultValue="Enter Your Name" {...register("name")} />
                <br />
                <h6>Description</h6>
                <input name="description" class="mb-3" style={{ height: "200px", width: "300px" }} defaultValue="description" {...register("description")} />
                <br />
                <input type="submit" class="btn btn-success mt-3" name="save" />
            </form>
        </section>
    );
};

export default Review;