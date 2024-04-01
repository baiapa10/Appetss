import React from "react";
import { Box, Text, Flex, Spacer, Button } from "@chakra-ui/react";

// Dummy data - replace this with your own data fetching or storage logic
const dogs = [
    {
        name: "Pom BARULAHIR",
        price: 1000000,
        location: "Jakarta Barat",
    },
    {
        name: "Teckel lucu",
        price: 1200000,
        location: "Kepulauan Seribu",
    },
    {
        name: "Dobberman jantan",
        price: 2000000,
        location: "Tengah",
    },
    {
        name: "Corgi kecil",
        price: 3000000,
        location: "Pala Sun",
    },
    {
        name: "Golden Lawak",
        price: 900000,
        location: "Jakarta Selatan",
    },
    {
        name: "Pug Mrengut",
        price: 5000000,
        location: "Bandung, Jawa Barat",
    },
    {
        name: "Haski Tidur",
        price: 2123123,
        location: "Tangerang",
    },
];

const Catalogue = () => {
    // Add your own sorting or filtering logic here
    const sortedDogs = dogs.sort((a, b) => b.price - a.price);

    return (
        <Box>
            <Flex mb={4} justifyContent="space-between" alignItems="center">
                <Text fontSize="xl" fontWeight="bold">
                    Found 8 Dogs
                </Text>
                <Spacer />
                <Button colorScheme="blue">Sort By: Price</Button>
            </Flex>
            {sortedDogs.map((dog) => (
                <Box
                    key={dog.name}
                    mb={4}
                    p={4}
                    borderWidth="1px"
                    borderRadius="md"
                >
                    <Text fontSize="xl" fontWeight="bold">
                        {dog.name}
                    </Text>
                    <Text fontSize="lg" color="gray.500">
                        {dog.location}
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" mt={2}>
                        Rp {dog.price.toLocaleString("id-ID")}
                    </Text>
                </Box>
            ))}
        </Box>
    );
};

export default Catalogue;
