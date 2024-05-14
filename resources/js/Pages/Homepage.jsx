import React from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    Box,
    Heading,
    Text,
    useColorModeValue,
    ChakraProvider,
    Button,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const PaymentPage = ({ auth, totalPrice, carts }) => {
    const cartItems = carts.map(cart => ({
        id: cart.id,
        quantity: cart.quantity,
        price: cart.item.price,
        name: cart.item.name
    }));
    console.log(totalPrice)

    const handlePayment = () => {
        Inertia.post('/process-payment', { totalPrice, cartItems });
    };

    // Check if totalPrice is null and provide a fallback value
    const displayTotalPrice = totalPrice !== null ? totalPrice : '0';

    return (
        <ChakraProvider>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Payment
                    </h2>
                }
            >
                <Head title="Payment" />
                <Box
                    bg={useColorModeValue("rgba(253, 201, 152, 1)")}
                    minH="100vh"
                    id="random-background-box"
                    bgImage={`url(/storage/logo/image.png)`}
                    bgSize="250px"
                >
                    <Heading>Payment</Heading>
                    <Box>
                        <Text fontSize="lg" mb="4">
                            Total Pembayaran: Rp.{displayTotalPrice}
                        </Text>
                        <Text mb="4">
                            Silakan lakukan pembayaran dalam waktu 24 jam.
                        </Text>
                        <Button colorScheme="blue" onClick={handlePayment}>OK</Button>
                    </Box>
                </Box>
            </AuthenticatedLayout>
        </ChakraProvider>
    );
};

export default PaymentPage;