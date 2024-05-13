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

const PaymentPage = ({ auth, totalPrice }) => {
    console.log("Total Price:", totalPrice);

    // Function to handle item removal from the wishlist
    const handleRemove = (itemId) => {
        Inertia.delete(`/wishlist/${itemId}`);
    };

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
                            Total Pembayaran: Rp.{totalPrice}
                        </Text>
                        <Text mb="4">
                            Silakan lakukan pembayaran dalam waktu 24 jam.
                        </Text>
                        <Button colorScheme="blue">OK</Button>
                    </Box>
                </Box>
            </AuthenticatedLayout>
        </ChakraProvider>
    );
};

export default PaymentPage;
