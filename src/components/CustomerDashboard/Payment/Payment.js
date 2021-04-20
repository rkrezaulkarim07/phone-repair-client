import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IhWQvF5Tm6Uy3CaYdIpUKgYvAAACoNnPxBGh0V0BZ1f3swgvKh2el6nnKvgF67gptQn5dNHmvK2FwXGZr9dwwy800trHWqH8e');

const Payment = () => {
    return (
        <div>
            <h1 className="mb-5">Payment</h1>
            <form className="mb-5" action="">
                <h3>Name</h3>
                <input type="text" name="name" id="" />
                <br/>
                <h3>Email</h3>
                <input type="text" name="email" id="" />
            </form>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;