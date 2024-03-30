import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

function Products({ name, image, description }) {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
    >
      <Image src={image} alt={name} mb={2} />
      <Text fontWeight="bold" fontSize="xl" mb={1}>
        {name}
      </Text>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </Box>
  );
}

export default Products;
