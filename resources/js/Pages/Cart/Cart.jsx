import React, { useState } from "react";
import {
    Box,
    Button,
    Text,
    Flex,
    FormControl,
    Input,
    Spacer,
    useToast,
} from "@chakra-ui/react";

const shoppingCart = [
    {
        id: 1,
        name: "Whiskas Kitten (2-12 months) Dry, Ocean Fish, 450g Pack",
        price: 2000,
        quantity: 1,
    },
    {
        id: 2,
        name: "Whiskas Junior Ocean Fhapmakanan kucing kering yang lengkap dan sembung",
        price: 2000,
        quantity: 1,
    },
    {
        id: 3,
        name: "Kaya lot torque track) dan konulure untuk perkur bangun llarg pony hand",
        price: 2000,
        quantity: 1,
    },
];

const Cart = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isCheckout, setIsCheckout] = useState(false);
    const toast = useToast();

    const total = shoppingCart.reduce((prev, current) => {
        return prev + current.price * current.quantity;
    }, 0);

    const handleCheckout = () => {
        if (name && email && phone && address) {
            setIsCheckout(true);
            toast({
                title: "Checkout successful!",
                description: "Your order has been placed.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Please fill in the required fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4}>
                Shopping Cart
            </Text>
            {shoppingCart.map((item) => (
                <Box
                    key={item.id}
                    bg="gray.100"
                    p={2}
                    borderRadius="md"
                    mb={2}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Text fontWeight="bold" flexGrow={1}>
                        {item.name}
                    </Text>
                    <Text fontWeight="bold">
                        {item.price} x {item.quantity}
                    </Text>
                </Box>
            ))}
            <Box mt={4}>
                <Text fontWeight="bold" mb={2}>
                    Summary
                </Text>
                <Flex justifyContent="space-between" mb={2}>
                    <Text>Total:</Text>
                    <Text>Rp {total}</Text>
                </Flex>
                <Flex justifyContent="space-between" mb={2}>
                    <Text>Item:</Text>
                    <Text>{shoppingCart.length}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text>Checkout:</Text>
                    <Button
                        colorScheme="blue"
                        onClick={handleCheckout}
                        isDisabled={isCheckout}
                    >
                        {isCheckout ? "Checked out" : "Checkout"}
                    </Button>
                </Flex>
            </Box>
            {isCheckout && (
                <Box mt={4}>
                    <Text fontWeight="bold" mb={2}>
                        Checkout details
                    </Text>
                    <Flex direction="column" mb={1}>
                        <Text>Name: {name}</Text>
                        <Text>Email: {email}</Text>
                        <Text>Phone: {phone}</Text>
                        <Text>Address: {address}</Text>
                    </Flex>
                </Box>
            )}
        </Box>
    );
};

export default Cart;
