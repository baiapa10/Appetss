import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    Link,
    Text,
    Stack,
    SimpleGrid,
    useColorModeValue,
    ChakraProvider ,
    Center,
    Image,
} from '@chakra-ui/react';
import React, {useEffect, useHistory, useRef  } from 'react';
import { Head,  } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Products = (props) => {
    const { auth } = props;
    return (
    <ChakraProvider>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
        <Head title={props.title} />
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
        <Text fontSize="md" color="gray.600" mt={2}>
        Price: {price}
        </Text>
        <Text fontSize="md" color="gray.600" mb={2}>
        Available: {quantity}
        </Text>
        <Button colorScheme="blue" onClick={onAddToCart}>
        Add to Cart
        </Button>
    </Box>
    </AuthenticatedLayout>
    </ChakraProvider>
    );
}

export default Products;
