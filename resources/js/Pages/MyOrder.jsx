import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const MyOrder = ({ transactions }) => {
    const handleReceive = (id) => {
        Inertia.put(`/transactions/${id}`, { status: 2 });
    };

    return (
        <div>
            {transactions.map(transaction => (
                <div key={transaction.id}>
                    <h2>Transaction {transaction.id}</h2>
                    <p>Total Price: {transaction.total_price}</p>
                    <p>Status: {transaction.status}</p>
                    <h3>Items:</h3>
                    <ul>
                        {transaction.items.map(item => (
                            <li key={item.id}>
                                {item.name} (Quantity: {item.quantity})
                            </li>
                        ))}
                    </ul>
                    {transaction.status === 1 && (
                        <button onClick={() => handleReceive(transaction.id)} style={{ backgroundColor: 'red', color: 'white' }}>
                            click me if the item is already received
                        </button>
                    )}
                    {transaction.status === 2 && (
                        <button  style={{ backgroundColor: 'green', color: 'white' }}>
                            Item already received
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}   

export default MyOrder;