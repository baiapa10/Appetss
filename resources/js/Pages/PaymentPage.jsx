// resources/js/Pages/PaymentPage.jsx
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const PaymentPage = ({ totalPrice }) => {
  return (
    <div>
      <h1>Payment Page</h1>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default PaymentPage;
    