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
import QuantitySelector from "./Item/partials/QuantitySelector";

const Cart = ({ auth }) => {
    const { props } = usePage();
    const { carts } = props || [];
    const [totalPrice, setTotalPrice] = useState(0);


    // Function to handle item removal from the wishlist
    const handleRemove = (itemId) => {
        Inertia.delete(`/cart/${itemId}`);
    };

    useEffect(() => {
        // Calculate total price whenever the list changes
        let totalPrice = 0;

        if (carts && carts.length > 0) { // Menambahkan pengecekan untuk carts
            totalPrice = carts.reduce((total, cart) => {
                return total + parseFloat(cart.item.price); // Menggunakan nama variabel yang berbeda untuk menghindari konflik dengan nama parameter
            }, 0);
        }

        setTotalPrice(totalPrice);
    }, [carts]);


    const calculateTotalPrice = (wishlistItem) => {
        if (wishlistItem.item && wishlistItem.item.price && wishlistItem.quantity) {
            const price = parseFloat(wishlistItem.item.price); // Konversi ke tipe data float
            const quantity = parseFloat(wishlistItem.quantity);

            if (!isNaN(price) && !isNaN(quantity)) {
                return price; // Mengembalikan harga, bukan harga * jumlah
            }
        }
        return 0; // Return 0 if data is invalid
    };


    return (
        <ChakraProvider>
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
                    {carts.length > 0 ? (
                        <Table variant="striped" colorScheme="">
                        <Tbody>
                            {carts.map((carts) => (
                                <Tr key={carts.id}>
                                    <Td>
                                        <Flex alignItems="center">
                                            <Image
                                                src={`/storage/${carts.item.image}`}
                                                alt="wishlist item"
                                                width={"90px"}
                                            />
                                            <Text ml={4}>{carts.item.name} - {carts.item.description}</Text>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Flex alignItems="center" justifyContent="center">
                                            <QuantitySelector initialStock={carts.item.stock} price={carts.item.price} />
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Button
                                            onClick={() => {
                                                Inertia.delete(`/wishlist/${carts.id}`);
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                            <Tr>
                                <Td colSpan="2" textAlign="right">Total ({carts.length} produk):</Td>
                                <Td>
                                    {totalPrice}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    ) : (
                        <Text>Your Shopping Cart is empty.</Text>
                    )}
                </Box>
            </AuthenticatedLayout>
        </ChakraProvider>
    );
};

export default Cart;
