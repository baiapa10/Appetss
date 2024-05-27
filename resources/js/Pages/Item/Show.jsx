import React, { useEffect, useHistory, useRef, useState } from "react";
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
    Spacer,
    IconButton,
} from "@chakra-ui/react";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import QuantitySelector from "./partials/QuantitySelector";
import FlashMessageHandler from "../FlashMessageHandler";

const addToCart = (itemId, quantity) => {
    Inertia.post("/cart/store", { item_id: itemId, quantity: quantity });
    // Inertia.visit(`/cart`);
};
const Show = ({ item, auth }) => {
    // const { auth } = props;

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const [rating, setRating] = useState(3);

    useEffect(() => {
        const randomRating = (Math.floor(Math.random() * 5 * 2) + 6) / 2; // Generates a random number between 3 and 5, including halves
        setRating(randomRating);
    }, []);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <Image
                        key={i}
                        src={`/storage/logo/bintang.png`}
                        alt="Filled Star"
                        width={"32px"}
                        ml={3}
                    />
                );
            } else if (i - 0.5 === rating) {
                stars.push(
                    <Image
                        key={i}
                        src={`/storage/logo/setengahbintang.png`}
                        alt="Half Star"
                        width={"34px"}
                        ml={3}
                    />
                );
            } else {
                stars.push(
                    <Image
                        key={i}
                        src={`/storage/logo/bintangkosong.png`}
                        alt="Empty Star"
                        width={"32px"}
                        ml={3}
                    />
                );
            }
        }
        return stars;
    };

    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <ChakraProvider>
            <FlashMessageHandler>
                <AuthenticatedLayout
                    user={auth.user}
                    header={
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Show
                        </h2>
                    }
                >
                    <Box
                        bg={useColorModeValue("rgba(253, 201, 152, 1)")}
                        minH="100vh"
                        id="random-background-box"
                        bgImage={`url(/storage/logo/image.png)`}
                        bgSize="250px"
                        mb={"40px"}
                    >
                        <Head title="Show Item" />
                        <Flex direction="row" alignItems="left" ml={"40px"}>
                            <Image
                                src={`/storage/${item.image}`}
                                alt={item.name}
                                boxSize="200px"
                                objectFit="cover"
                                ml={8}
                                mt={"40px"}
                                borderRadius={"40px"}
                                borderBlockEndColor={"red"}
                                width="600px"
                                height="450px"
                            />

                            <Flex direction="column" alignItems="flex-start">
                                <Text
                                    fontSize="60px"
                                    color="rgba(133, 81, 33, 1)"
                                    fontFamily="Fredoka One"
                                    mt={"40px"}
                                    ml={4}
                                    fontWeight="bold"
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    ml={8}
                                    mt={2}
                                    fontSize="14px"
                                    mb={4}
                                    color="black"
                                >
                                    {formatDate(item.created_at)}
                                </Text>
                                <Flex
                                    direction="row"
                                    alignItems="center"
                                    mt={2}
                                >
                                    {renderStars(rating)}
                                </Flex>
                                <Flex direction="row" alignItems="center">
                                    <Box mt={"40px"}>
                                        <Image
                                            src={`/storage/pet_images/location.png`}
                                            alt="Location"
                                            width={"14px"}
                                            borderRadius="100%"
                                            ml={4}
                                        />
                                    </Box>
                                    <Box ml={1} mt={"40px"}>
                                        <Text fontSize="lg">
                                            {item.location}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex
                            direction="column"
                            alignItems="end"
                            justifyContent="flex-end"
                            mr={"40px"}
                            mt={"40px"}
                        >
                            <Flex alignItems="center">
                                <Text
                                    mr={2}
                                    fontWeight="bold"
                                    color="rgba(133, 81, 33, 1)"
                                    fontFamily="Fredoka One"
                                    fontSize="30px"
                                >
                                    Quantity:
                                </Text>
                                <QuantitySelector
                                    id="quantity-selector"
                                    initialStock={item.stock}
                                    price={item.price}
                                    onChange={handleQuantityChange}
                                />
                                <Spacer />
                            </Flex>
                            <Text fontSize="lg" mt={2} ml={"202px"}>
                                Stock: {item.stock} pc(s)
                            </Text>
                            <Flex ml={2} mt={8}>
                                <Button
                                    fontFamily="Fredoka One"
                                    fontSize="26px"
                                    fontWeight="bold"
                                    ml={4}
                                    mt={-7}
                                    bg="rgba(203, 142, 85, 1)"
                                    color="rgba(133, 81, 33, 1)"
                                    size="sm"
                                    width={"164"}
                                    height={"96px"}
                                    mr={2}
                                    onClick={() => {
                                        addToWishlist(data.id);
                                    }}
                                    _hover={{
                                        bg: "rgba(133, 81, 33, 0.8)",
                                    }}
                                    _active={{
                                        bg: "rgba(133, 81, 33, 0.6)",
                                    }}
                                >
                                    Add to Wishlist
                                </Button>
                                <IconButton
                                    icon={
                                        <Image
                                            src="/storage/pet_images/chat.png"
                                            width={"164"}
                                            height={"96px"}
                                        />
                                    }
                                    onClick={() => {}}
                                    aria-label="Chat"
                                    variant="ghost"
                                    mr={2}
                                />
                                <IconButton
                                    icon={
                                        <Image
                                            src="/storage/pet_images/addtocart.png"
                                            width={"164"}
                                            height={"96px"}
                                            mt={-7}
                                        />
                                    }
                                    onClick={() => {
                                        addToCart(item.id, quantity);
                                    }}
                                    aria-label="Add to Cart"
                                    variant="ghost"
                                    size="md"
                                    style={{
                                        display:
                                            item.category_id === 13
                                                ? "block"
                                                : "none",
                                    }}
                                />
                            </Flex>
                        </Flex>
                        <Box
                            position="relative"
                            display="inline-block"
                            mt="45px"
                            bg="white"
                            width={["100%", "100%", "80%", "70%"]}
                            height={["auto", "auto", "200px", "200px"]}
                            padding={["10px", "20px", "30px", "40px"]}
                            ml={["0", "0", "10%", "15%"]}
                            borderRadius="52px"
                        >
                            <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                textAlign="center"
                                padding="10px"
                                borderRadius="5px"
                            >
                                <Text
                                    fontSize="40px"
                                    color="rgba(133, 81, 33, 1)"
                                    fontFamily="Fredoka One"
                                    fontWeight="bold"
                                >
                                    Deskripsi
                                </Text>
                                <Text>{item.description}</Text>
                            </Box>
                        </Box>
                    </Box>
                </AuthenticatedLayout>
            </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default Show;
