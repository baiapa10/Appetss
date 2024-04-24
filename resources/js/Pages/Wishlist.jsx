import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';

const Wishlist = () => {
    const { props } = usePage();
    const { list } = props;

    // Function to handle item removal from the wishlist
    const handleRemove = (itemId) => {
        Inertia.delete(`/wishlist/${itemId}`);
    };

    return (
        <div>
            <h1>My Wishlist</h1>
            {list.length > 0 ? (
                <ul>
                    {list.map((wishlistItem) => (
                        <li key={wishlistItem.id}>
                            {wishlistItem.item.name} - {wishlistItem.item.description} 
                            <button onClick={() => { Inertia.delete(`/wishlist/${wishlistItem.id}`);}}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;