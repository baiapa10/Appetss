import React from 'react';
import { Head } from '@inertiajs/react';

export default function Homepage(props) {
  return (
    <div>
      <Head title={props.title} />
      {props.pets ? (
        props.pets.map((data, i) => {
          return (
            <div key={i}>
              <h1>name: {data.name}</h1>
              <p>description: {data.description}</p>
              <p>price: {data.price}</p>
              <p>location: {data.location}</p>
              {data.image && (
                <img
                  src={`/storage/${data.image}`} 
                  alt={data.name}
                  style={{ maxWidth: '100%', height: '150px' }}
                />
              )}
              <br />
            </div>
          );
        })
      ) : (
        <p>No pets found.</p>
      )}
    </div>
  );
}
