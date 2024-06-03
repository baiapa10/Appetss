import React, { useEffect, useHistory, useRef } from "react";
import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    //Link,
    Text,
    Stack,
    SimpleGrid,
    useColorModeValue,
    ChakraProvider,
    Center,
    Image,
} from "@chakra-ui/react";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessageHandler from "./FlashMessageHandler";
import AdBanner from "./AdBanner";

const addToWishlist = (itemId) => {
    Inertia.post("wishlist/store", { item_id: itemId });
};

const Homepages = (props) => {
    const { auth } = props;

    const gridRef = useRef(null);
    // const navigate = useNavigate();

    const scrollRight = () => {
        if (gridRef.current) {
            gridRef.current.scrollBy({
                left: 200, // Adjust this value as needed
                behavior: "smooth",
            });
        }
    };

    const categoryMap = {
        1: "Dog - Sell",
        2: "Dog - Adopt",
        3: "Cat - Sell",
        4: "Cat - Adopt",
        5: "Fish - Sell",
        6: "Fish - Adopt",
        7: "Bird - Sell",
        9: "Reptile - Sell",
        10: "Reptile - Adopt",
        11: "Small Pets - Sell",
        12: "Small Pets - Adopt",
        13: "Equipment & Foods - Sell",
    };

    const handleCategoryClick = (category) => {
        Inertia.get("/homepages", { category: category });
    };
    return (
        <ChakraProvider>
            <FlashMessageHandler>
                <AuthenticatedLayout
                    user={auth.user}
                    header={
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Homepages
                        </h2>
                    }
                >
                    <Head title={props.title} />
                    <Box
                        bg={useColorModeValue("rgba(253, 201, 152, 1)")}
                        minH="100vh"
                        id="random-background-box"
                        bgImage={`url(/storage/logo/image.png)`}
                        bgSize="250px"

                    >
                        <Flex>
                            <AdBanner />
                        </Flex>
                                        <Flex
                                            px={5}
                                            py={4}
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Text
                                                color="rgba(133, 81, 33, 1)"
                                                fontSize="38px"
                                                fontWeight="bold"
                                                ml={6}
                                            >
                                                Shop Category
                                            </Text>
                                        </Flex>
                                        <Box display="flex" flexWrap="wrap">
                                            <Image
                                                src="/storage/logo/dog.png"
                                                alt="Dog Category"
                                                ml={9}
                                                width="191px"
                                                height="191px"
                                                mb={12}
                                                onClick={() => handleCategoryClick("Dog")}
                                                style={{ cursor: "pointer" }}
                                                borderRadius={25}
                                                transition="transform 0.2s, box-shadow 0.2s"
                                                        _hover={{
                                                            transform: "scale(1.05)",
                                                            boxShadow: "6px 0px 10px rgba(0, 0, 0, 0.3)"
                                                        }}
                                            />
                                            <Image
                                                src="/storage/logo/cat.png"
                                                alt="Cat Category"
                                                ml={9}
                                                width="191px"
                                                height="191px"
                                                onClick={() => handleCategoryClick("Cat")}
                                                style={{ cursor: "pointer" }}
                                                borderRadius={25}
                                                transition="transform 0.2s, box-shadow 0.2s"
                                                        _hover={{
                                                            transform: "scale(1.05)",
                                                            boxShadow: "6px 0px 10px rgba(0, 0, 0, 0.3)"
                                                        }}
                                            />
                                            <Image
                                                src="/storage/logo/fish.png"
                                                alt="Fish Category"
                                                ml={9}
                                                width="191px"
                                                height="191px"
                                                onClick={() => handleCategoryClick("Fish")}
                                                style={{ cursor: "pointer" }}
                                                borderRadius={25}
                                                transition="transform 0.2s, box-shadow 0.2s"
                                                        _hover={{
                                                            transform: "scale(1.05)",
                                                            boxShadow: "6px 0px 10px rgba(0, 0, 0, 0.3)"
                                                        }}
                                            />
                                            <Image
                                                src="/storage/logo/bird.png"
                                                alt="Bird Category"
                                                ml={9}
                                                width="191px"
                                                height="191px"
                                                onClick={() => handleCategoryClick("Bird")}
                                                style={{ cursor: "pointer" }}
                                                borderRadius={25}
                                                transition="transform 0.2s, box-shadow 0.2s"
                                                        _hover={{
                                                            transform: "scale(1.05)",
                                                            boxShadow: "6px 0px 10px rgba(0, 0, 0, 0.3)"
                                                        }}
                                            />
                                            <Image
                                                src="/storage/logo/reptile.png"
                                                alt="Reptile Category"
                                                ml={9}
                                                width="191px"
                                                height="191px"
                                                onClick={() => handleCategoryClick("Reptile")}
                                                style={{ cursor: "pointer" }}
                                                borderRadius={25}
                                                transition="transform 0.2s, box-shadow 0.2s"
                                                        _hover={{
                                                            transform: "scale(1.05)",
                                                            boxShadow: "6px 0px 10px rgba(0, 0, 0, 0.3)"
                                                        }}
                                            />
                                            <Image
                                                src="/storage/logo/smallpet.png"
                                                alt="Other Category"
                                                ml={9}
                                                width="191px"
                                                height="191px"
                                                onClick={() => handleCategoryClick("Other")}
                                                style={{ cursor: "pointer" }}
                                                borderRadius={25}
                                                transition="transform 0.2s, box-shadow 0.2s"
                                                        _hover={{
                                                            transform: "scale(1.05)",
                                                            boxShadow: "6px 0px 10px rgba(0, 0, 0, 0.3)"
                                                        }}
                                            />
                                        </Box>
                        <Flex
                            px={5}
                            py={4}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Text
                                color="rgba(133, 81, 33, 1)"
                                fontSize="38px"
                                fontWeight="bold"
                                ml={6}
                            >
                                Today's Offer
                            </Text>
                        </Flex>
                        <Box display="flex" flexWrap="wrap">
                            {props.pets ? (
                                props.pets.map((data, i) => (
                                    <Box
                                        key={i}
                                        ml={8}
                                        mr={2}
                                        mb={4}
                                        flexBasis="calc(33.33% - 250px)"
                                        boxShadow="0px 0px 2px rgba(0, 0, 0, 0.2)"
                                        border="1px solid #ccc"
                                        borderRadius="xl"
                                        bg={useColorModeValue("gray.200", "gray.700")}
                                        borderColor="black"
                                        p={4}
                                        transition="transform 0.2s, box-shadow 0.2s"
                                        _hover={{
                                            transform: "scale(1.05)",
                                            boxShadow: "6px 0px 10px rgba(0, 0, 0, 0.3)"
                                        }}
                                    >
                                        <Image
                                            src={`/storage/${data.image}`}
                                            alt={data.name}
                                            alignItems="center"
                                            style={{
                                                maxWidth: "100%",
                                                height: "150px",
                                                borderRadius: "36px"
                                            }}

                                        />
                                        <br />
                                        <Heading size="md" mb={2}>
                                           {data.name}
                                        </Heading>
                                        <Text mt={2}>
                                           {data.description}
                                        </Text>

                                        <Text>
                                             Price: Rp.{" "}
                                            {Number(
                                                data.price
                                            ).toLocaleString()}
                                        </Text>
                                        <Text>Location: {data.location}</Text>
                                        <Text>
                                            Type:{" "}
                                            {categoryMap[data.category_id]}
                                        </Text>
                                        <Text>
                                        Posted at: {new Date(data.created_at).toLocaleDateString()}
                                        </Text>
                                        <Button
                                            as="a"
                                            href={`/item/${data.id}`}
                                            style={{
                                                color: "white   ",
                                            }}
                                            bg="rgba(133, 81, 33, 1)"
                                            fontSize="10px"
                                            fontWeight="bold"
                                            size={"sm"}
                                            _hover={{
                                                textDecoration: "underline",
                                            }}
                                            mt={2}
                                            mb={2}
                                        >
                                            View Details
                                        </Button>

                                        <Button
                                            fontSize="10px"
                                            fontWeight="bold"
                                            ml={1}
                                            bg="rgba(133, 81, 33, 1)"
                                            color="white"
                                            size="sm"
                                            _hover={{
                                                textDecoration: "underline",
                                            }}
                                            _active={{
                                                textDecoration: "underline",
                                                color: "rgba(133, 81, 33, 0.6)",
                                            }}
                                            onClick={() => {
                                                addToWishlist(data.id);
                                            }}
                                        >
                                            Add to Wishlist
                                        </Button>
                                    </Box>
                                ))
                            ) : (
                                <Text>No pets found.</Text>
                            )}
                        </Box>
                    </Box>
                </AuthenticatedLayout>
            </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default Homepages;
