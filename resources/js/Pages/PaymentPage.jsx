// resources/js/Pages/PaymentPage.jsx
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    Box,
    Text,
    Select,
    VStack,
    HStack,
    Spacer,
    ChakraProvider,
    useColorModeValue,
    Center,
    Container,
    Image,
    Input,
    Button
} from "@chakra-ui/react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/inertia-react";
import { InertiaLink } from '@inertiajs/inertia-react';

const PaymentPage = ({ auth, totalPrice, props, cartItems }) => {
    // const { props } = usePage();
    console.log(cartItems)
    // const { totalPrice } = props.query;

    const [shippingMethod, setShippingMethod] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [shippingCost, setShippingCost] = useState(0);
    const [address, setAddress] = useState("");
    const handleShippingMethodChange = (method) => {
        setShippingMethod(method);
        // Set shipping cost based on selected method
        if (method === "JNT") {
            setShippingCost(10000);
        } else if (method === "LalaMove") {
            setShippingCost(15000);
        } else {
            setShippingCost(0);
        }
    };

    const handleOKClick = () => {
       // const { cartItems, totalPrice } = this.state;
        // Menyiapkan data keranjang belanja untuk dikirimkan
        // if (cartItems && cartItems.length > 0) ({
        //     id: item.id,
        //     quantity: item.quantity,
        // });
        if (!shippingMethod) {
            setErrorMessage("Please select a shipping method");
            return;
        }
        // Membuat permintaan untuk membuat transaksi
        Inertia.post(route("processPayment"), {
            cartItems: cartItems,
            totalPrice: Number(totalPrice) + Number(shippingCost),
            address: address,
        });
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
                <Box
                    bg={useColorModeValue("rgba(253, 201, 152, 1)")}
                    minH="100vh"
                    // bgImage={`url(/storage/logo/image.png)`}
                    // bgSize="250px"
                    // bgPosition="random"

                    id="random-background-box"
                    // minH="100vh"
                    bgImage={`url(/storage/logo/image.png)`}
                    bgSize="250px"
                >
                    {errorMessage && <Text color="red">{errorMessage}</Text>}

                    <Box mt={8}>
                        <Text
                            textAlign="center"
                            fontSize="xl"
                            fontWeight="bold"
                        >
                            Payment Page
                        </Text>
                        <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
                            <Box p={6} bg="gray" borderBottom="1px" borderColor="gray.200">
                                <VStack spacing={4}>
                                    <Box>
                                        <Text fontSize="lg" fontWeight="bold">
                                            Shipping
                                        </Text>
                                        <HStack mt={2}>
                                        <Text>Address:</Text>
                                             <Input value={address} onChange={(e) => setAddress(e.target.value)} />
                                        </HStack>
                                        <HStack mt={2}>

                                            <Text>Choose:</Text>
                                            <Select
                                                placeholder="Select method"
                                                value={shippingMethod}
                                                onChange={(e) =>
                                                    handleShippingMethodChange(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="JNT">JNT</option>
                                                <option value="LalaMove">
                                                    LalaMove
                                                </option>
                                            </Select>
                                        </HStack>
                                        {shippingMethod && (
                                            <HStack mt={2}>
                                                <Text>Ongkir:</Text>
                                                <Text fontWeight="bold">
                                                    Rp.{" "}
                                                    {shippingCost.toLocaleString()}
                                                </Text>
                                            </HStack>
                                        )}
                                    </Box>
                                    <Box>
                                        <Text fontSize="lg" fontWeight="bold">
                                            Payment
                                        </Text>
                                        <Text mt={2}>
                                            Total Harga (Item + Ongkir): Rp.{" "}
                                            {(
                                                parseInt(totalPrice) +
                                                parseInt(shippingCost)
                                            ).toLocaleString()}
                                        </Text>
                                    </Box>
                                    <Button colorScheme="blue" onClick={handleOKClick}>
                                        OK
                                    </Button>
                                    {/* <InertiaLink
                                        href={route('processPayment')}
                                        method="post"
                                        onSuccess={() => {
                                            // Redirect to /myorder on successful payment
                                            Inertia.visit(route('/myorder'));
                                        }}
                                        >
                                        <Button colorScheme="blue">OK</Button>
                                    </InertiaLink> */}
                                </VStack>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AuthenticatedLayout>
        </ChakraProvider>
    );
};

export default PaymentPage;
