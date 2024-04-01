import React from "react";
import {
    Box,
    Button,
    Text,
    Flex,
    FormControl,
    Input,
    Spacer,
    useToast,
} from "@chakra-ui/react";

const petListings = [
    { id: 1, type: "Item", name: "Dog Food" },
    { id: 2, type: "Pet", name: "Puppy" },
    { id: 3, type: "Adopt", name: "Kitten" },
];

const PetListings = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const toast = useToast();

    const addListing = () => {
        // Add your add listing logic here
        toast({
            title: "Added!",
            description: "The listing has been added.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const filteredListings = petListings.filter((listing) =>
        listing.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box p={4}>
            <Flex mb={4} justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl">
                    What do you want to add to the listings?
                </Text>
                <Button colorScheme="blue" onClick={addListing}>
                    Add Listing
                </Button>
            </Flex>
            <FormControl>
                <Input
                    placeholder="Search for listings"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </FormControl>
            <Flex direction="column" mt={4}>
                {filteredListings.map((listing) => (
                    <Box
                        key={listing.id}
                        bg="gray.100"
                        p={2}
                        borderRadius="md"
                        mb={2}
                    >
                        <Text fontWeight="bold">{listing.type}</Text>
                        <Text>{listing.name}</Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default PetListings;
