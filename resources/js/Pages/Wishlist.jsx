import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
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
import FlashMessageHandler from './FlashMessageHandler';

const Wishlist = ({ auth }) => {
    const { props } = usePage();
    const { list } = props;
 
    return (
        <ChakraProvider>
            <FlashMessageHandler>

            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Wishlist
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
                    <Heading>My Wishlist</Heading>
                    {list.length > 0 ? (
                        <Table variant="striped" colorScheme="">
                        <Tbody>
                            {list.map((wishlistItem) => (
                                <Tr key={wishlistItem.id}>
                                    <Td>
                                        <Flex alignItems="center">
                                            <Image
                                                src={`/storage/${wishlistItem.item.image}`}
                                                alt="wishlist item"
                                                width={"90px"}
                                                />
                                            <Text ml={4}>{wishlistItem.item.name} - {wishlistItem.item.description}</Text>
                                        </Flex>
                                    </Td>
                                  
                                    <Td>
                                        <Button
                                            onClick={() => {
                                                Inertia.delete(`/wishlist/${wishlistItem.id}`);
                                            }}
                                            >
                                            Remove
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                            <Tr>
                                <Td colSpan="2" textAlign="right">Total ({list.length} produk)</Td>
                                
                            </Tr>
                        </Tbody>
                    </Table>
                    ) : (
                        <Text>Your wishlist is empty.</Text>
                    )}
                </Box>
            </AuthenticatedLayout>
                    </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default Wishlist;
