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
import FlashMessageHandler from '../FlashMessageHandler';

const addToCart = (itemId, quantity) => {
    Inertia.post('/cart/store', { item_id: itemId, quantity: quantity });
    // Inertia.visit(`/cart`);
};
const Show = ({ item, auth }) => {
    // const { auth } = props;

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
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
                                    <Text fontSize="lg">{item.location}</Text>
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
                                onChange={handleQuantityChange} // Meneruskan fungsi handleQuantityChange sebagai prop
                            />
                            <Spacer />
                        </Flex>
                        <Text fontSize="lg" mt={2} ml={"202px"}>
                            Stock: {item.stock} pc(s)
                        </Text>
                        <Flex ml={2} mt={8}>
                            <IconButton
                                icon={
                                    <Image
                                        src="/storage/pet_images/chat.png"
                                        width={"164"}
                                        height={"96px"}
                                    />
                                }
                                onClick={() => {
                                    // Logika untuk chat
                                }}
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
                                    />
                                }
                                onClick={() => {
                                    addToCart(item.id, quantity)
                                }}
                                aria-label="Add to Cart"
                                variant="ghost"
                                size="md"
                            />
                        </Flex>
                    </Flex>
                    <Box position="relative" display="inline-block" mt={"45px"}>
                        <Image
                            src="/storage/pet_images/persegipanjang.png"
                            alt="Persegi Panjang"
                            width="3200px"
                            height="200px"
                        />
                        <Box
                            position="absolute"
                            top="18%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            textAlign="center"
                            // backgroundColor="rgba(255, 255, 255, 0.7)"
                            padding="10px"
                            borderRadius="5px"
                        >
                            <Text
                                fontSize="40px"
                                color="rgba(133, 81, 33, 1)"
                                fontFamily="Fredoka One"
                                fontWeight={"bold"}
                            >
                                Deskripsi
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. {item.description}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </AuthenticatedLayout>
            </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default Show;
