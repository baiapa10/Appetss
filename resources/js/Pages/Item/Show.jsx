import React from 'react';

const Show = ({ item }) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <p>Location: {item.location}</p>
            {item.image && <img src={`/storage/${item.image}`} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />}
        </div>
    );
};

export default Show;