import React, { useState, useEffect } from "react";
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
    Flex,
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
    const [voucherCode, setVoucherCode] = useState("");
    const [voucherApplied, setVoucherApplied] = useState(false);
    const [discount, setDiscount] = useState(0);
    const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);

    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [newAddress, setNewAddress] = useState(auth.user.address);

    useEffect(() => {
        document.title = "Payment Page";
    }, []);

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
        setVoucherApplied(false);
        setDiscount(0);
    };

    const handleOKClick = () => {
        if (!shippingMethod) {
            setErrorMessage("Please select a shipping method");
            return;
        }

        Inertia.post(route("processPayment"), {
            cartItems: cartItems,
            totalPrice: Number(totalPrice) + Number(shippingCost) - discount,
            address: newAddress,
        });
    };

    const handleVoucherApply = () => {
        if (voucherCode === "DISCOUNTDELIVERY") {
            setDiscount(6000);
            setVoucherApplied(true);
        } else {
            setErrorMessage("Invalid voucher code");
        }
    };

    const handleSaveAddress = () => {
        // Here you can add functionality to save the new address to the backend
        // For now, we'll just update the auth.user.address state
        auth.user.address = newAddress;
        setIsEditingAddress(false);
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

                    <Box mt={8}>
                        <Box mt={4} p={4} borderWidth="1px" borderRadius="45px">
                            <Box
                                p={6}
                                bg="bisque"
                                borderBottom="1px"
                                borderColor="gray.200"
                                borderRadius="45px"
                                textAlign="center"
                            >
                                <Text
                                    fontSize="xl"
                                    fontWeight="bold"
                                    mb={8}
                                    >
                                    Payment Page
                                </Text>
                                <Flex justify="space-between"> {/* Flex container */}
                                    <VStack spacing={4} align="center" flex="1" ml="136px"> {/* Left column */}
                                        <Box>
                                            <Text fontSize="lg" fontWeight="bold" textAlign="start" >
                                                Shipping
                                            </Text>
                                            <HStack mt={2}>
                                                <Text> Shipping Address: {auth.user.address}</Text>
                                                <Button
                                                    size="sm"
                                                    ml={2}
                                                    onClick={() => setIsEditingAddress(!isEditingAddress)}
                                                >
                                                    Change
                                                </Button>
                                            </HStack>
                                            {isEditingAddress && (
                                                <HStack mt={2}>
                                                    <Input
                                                        value={newAddress}
                                                        onChange={(e) => setNewAddress(e.target.value)}
                                                        placeholder="Enter new address"
                                                    />
                                                    <Button onClick={handleSaveAddress}>Save</Button>
                                                </HStack>
                                            )}
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
                                            {errorMessage && errorMessage !== "Invalid voucher code" && (
                                                <Text color="red">{errorMessage}</Text>
                                            )}
                                            {shippingMethod && (
                                                <>
                                                    <HStack mt={2}>
                                                        <Text>Delivery:</Text>
                                                        <Text fontWeight="bold">
                                                            Rp.{" "}
                                                            {shippingCost.toLocaleString()}
                                                        </Text>
                                                    </HStack>
                                                    <HStack mt={2}>
                                                    <Text>Voucher:</Text>
                                                        <Input
                                                            placeholder="Enter voucher code"
                                                            value={voucherCode}
                                                            onChange={(e) =>
                                                                setVoucherCode(
                                                                    e.target.value
                                                                )
                                                            }
                                                            isDisabled={voucherApplied}
                                                        />
                                                        <Button
                                                            onClick={handleVoucherApply}
                                                            isDisabled={voucherApplied}
                                                        >
                                                            Apply
                                                        </Button>
                                                    </HStack>
                                                    {errorMessage === "Invalid voucher code" && (
                                                        <Text color="red">{errorMessage}</Text>
                                                    )}
                                                    {voucherApplied && (
                                                        <HStack mt={2}>
                                                            <Text>Discount:</Text>
                                                            <Text fontWeight="bold">
                                                                Rp.{" "}
                                                                {discount.toLocaleString()}
                                                            </Text>
                                                        </HStack>
                                                    )}
                                                </>
                                            )}
                                        </Box>
                                        <Box>
                                            <Text fontSize="lg" fontWeight="bold" textAlign="start">
                                                Payment
                                            </Text>
                                            <Text mt={2}>
                                                Total Price (Item + Shipping): Rp.{" "}
                                                {(
                                                    parseInt(totalPrice) +
                                                    parseInt(shippingCost) -
                                                    discount
                                                ).toLocaleString()}
                                            </Text>
                                        </Box>
                                    </VStack>
                                    <Box mt={4} flex="1" ml="60px"> {/* Right column */}
                                        <HStack>
                                            <Text fontSize="lg" fontWeight="bold">
                                                Payment Method
                                            </Text>
                                            <Image
                                                src="/storage/logo/arr.png"
                                                alt="Arrow Down"
                                                boxSize="20px"
                                                cursor="pointer"
                                                onClick={() => setShowPaymentInstructions(!showPaymentInstructions)}
                                            />
                                        </HStack>
                                        {showPaymentInstructions && (
                                            <VStack align="start" mt={2}>
                                                <Text>Transfer GoPay via BCA: 700010{auth.user.phone_number}</Text>
                                                <Text>1. Open BCA mobile application.</Text>
                                                <Text>2. Select M-TRANSFER, then TRANSFER BCA VIRTUAL ACCOUNT.</Text>
                                                <Text>3. Enter the company code for Gojek: 70001.</Text>
                                                <Text>4. Enter the amount of GoPay you want to pay.</Text>
                                                <Text>5. Enter your m-BCA PIN.</Text>
                                            </VStack>
                                        )}
                                    </Box>
                                </Flex>
                                <Button
                                alignSelf="center"
                                mt={4}
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
                                        I already paid
                                    </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AuthenticatedLayout>
        </ChakraProvider>
    );
};

export default PaymentPage;
