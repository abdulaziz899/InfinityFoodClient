import React from 'react';
import PaymentDetail from './PaymentDetail';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IeBp1FZaEpTxceHFE0DNTLocaHL6ob7eyWRyilfqYzSqz7MMSooEIQrOSra5e22bbwwXbfJHCtbqBbZtLzPGyQd00Xlvr0O8Q');

const Payment = ({handlePayment}) => {
    return (
        <div className='row'>
            <div className="col-md-9">
                <Elements stripe={stripePromise}>
                    <PaymentDetail handlePayment={handlePayment}></PaymentDetail>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;