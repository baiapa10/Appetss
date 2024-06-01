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
    Button,
} from "@chakra-ui/react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/inertia-react";
import { InertiaLink } from "@inertiajs/inertia-react";

const PaymentPage = ({ auth, totalPrice, props, cartItems }) => {
    console.log(cartItems);

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
        if (!shippingMethod) {
            setErrorMessage("Please select a shipping method");
            return;
        }
        if (!address) {
            setErrorMessage("Please input your address");
            return;
        }
        Inertia.post(route("processPayment"), {
            cartItems: cartItems,
            totalPrice: Number(totalPrice) + Number(shippingCost),
            address: address,
        });
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
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Payment Page
                    </h2>
                }
            >
                <Box
                    bg={useColorModeValue("rgba(253, 201, 152, 1)")}
                    minH="100vh"
                    id="random-background-box"
                    bgImage={`url(/storage/logo/image.png)`}
                    bgSize="250px"
                >
                    {errorMessage && <Text color="red">{errorMessage}</Text>}

                    <Box mt={8}>
                        <Box mt={4} p={4} borderWidth="1px" borderRadius="45px">
                            <Box
                                p={6}
                                bg="bisque"
                                borderBottom="1px"
                                borderColor="gray.200"
                                borderRadius="45px"
                            >
                                <Text
                                    textAlign="center"
                                    fontSize="xl"
                                    fontWeight="bold"
                                    mb={8}
                                >
                                    Payment Page
                                </Text>
                                <VStack spacing={4}>
                                    <Box>
                                        <Text fontSize="lg" fontWeight="bold">
                                            Shipping
                                        </Text>
                                        <HStack mt={2}>
                                            <Text>Address:</Text>
                                            <Input
                                                value={address}
                                                onChange={(e) =>
                                                    setAddress(e.target.value)
                                                }
                                            />
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
                                    <Button
                                        colorScheme="blue"
                                        onClick={handleOKClick}
                                        fontSize="14px"
                                        fontWeight="bold"
                                        ml={4}
                                        bg="rgba(133, 81, 33, 1)"
                                        color="white"
                                        size="sm"
                                        _hover={{
                                            bg: "rgba(133, 81, 33, 0.8)",
                                        }}
                                        _active={{
                                            bg: "rgba(133, 81, 33, 0.6)",
                                        }}
                                    >
                                        OK
                                    </Button>
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
