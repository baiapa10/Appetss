import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import FlashMessageHandler from './FlashMessageHandler';
import {
    Box,
    Heading,
    UnorderedList,
    ListItem,
    Button,
    Text,
    useColorModeValue,
    ChakraProvider,
    Image,
    Flex,
    Table, Tbody, Tr, Td
} from "@chakra-ui/react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import QuantitySelector from "./Item/partials/QuantitySelector";

const MyOrder = ({ auth }) => {
    const { props } = usePage();
    const { list = [] } = props;

    // Function to handle item removal from the wishlist
    const handleRemove = (itemId) => {
        Inertia.delete(`/wishlist/${itemId}`);
    };

    return (
        <ChakraProvider>
            <FlashMessageHandler>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        My Order
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
                    <Heading>My Order</Heading>
                    {list.length > 0 ? (
                        <Table variant="striped" colorScheme="">
                        <Tbody>
                            {list.map((myOrderItem) => (
                                <Tr key={myOrderItem.id}>
                                    <Td>
                                        <Flex alignItems="center">
                                            <Image
                                                src={`/storage/${myOrderItem.item.image}`}
                                                alt="myOrder item"
                                                width={"90px"}
                                            />
                                            <Text ml={4}>{myOrderItem.item.name} - {myOrderItem.item.description}</Text>
                                        </Flex>
                                    </Td>
                                </Tr>
                            ))}
                            <Tr>
                                <Td colSpan="2" textAlign="right">Total ({list.length} produk):</Td>
                                <Td>
                                    {totalPrice}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    ) : (
                        <Text>Your myOrderItem is empty.</Text>
                    )}
                </Box>
            </AuthenticatedLayout>
            </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default MyOrder;
