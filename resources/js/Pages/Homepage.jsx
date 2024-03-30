import React from 'react';
import { Head } from '@inertiajs/react';
// import "./HomePage.css";

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

<Box display="flex" flexWrap="wrap">
            {props.pets ? (
                props.pets.map((data, i) => (
                    <Box key={i} ml={8} mr={2} mb={4} flexBasis="calc(33.33% - 250px)" boxShadow="0px 0px 2px rgba(0, 0, 0, 0.2)" border="1px solid #ccc" borderRadius="xl" bg={useColorModeValue('gray.200', 'gray.700')} borderColor="black" p={4}>
                        <Image
                            src={`/storage/${data.image}`}
                            alt={data.name}
                            style={{ maxWidth: '100%', height: '150px' }}
                        />
                        <Heading size="md" mb={2}>Name: {data.name}</Heading>
                        <Text mt={2}>Description: {data.description}</Text>
                        <Text>Price: {data.price}</Text>
                        <Text>Location: {data.location}</Text>
                    </Box>
                ))
            ) : (
                <Text>No pets found.</Text>
            )}
        </Box>
    </div>
  );
}
