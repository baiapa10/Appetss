import React, { useState, useEffect } from "react";
import { Inertia, } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import {
    Box,
    Heading,
    Table,
    Tbody,
    Tr,
    Td,
    Button,
    Text,
    Checkbox,
    Image,
    Flex,
    useColorModeValue,
    ChakraProvider,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import QuantitySelector from "./Item/partials/QuantitySelector";
import { InertiaLink } from '@inertiajs/inertia-react';

const Cart = ({ auth }) => {
    const { props } = usePage();
    const { carts } = props || [];
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkedItems, setCheckedItems] = useState([]);
    const [updatedQuantities, setUpdatedQuantities] = useState({});

    const handleProceedToPayment = () => {
        Inertia.visit(route('payment.post'), { props: { query: { totalPrice: totalPrice } } });

    };




    const handleRemove = (itemId) => {
        const cartItem = carts.find((item) => item.id === itemId);
        Inertia.delete(`/cart/${itemId}`, {
            data: { quantity: cartItem.quantity },
        });

    };

    const handleCheckboxChange = (itemId) => {
        setCheckedItems((prevCheckedItems) =>
            prevCheckedItems.find(item => item.id === itemId)
                ? prevCheckedItems.filter((item) => item.id !== itemId)
                : [...prevCheckedItems, { id: itemId, quantity: carts.find(cart => cart.id === itemId).quantity }]
        );

    };

    useEffect(() => {
        let total = 0;
        carts.forEach((cart) => {
            if (checkedItems.find(item => item.id === cart.id)) {
                total += parseFloat(cart.item.price) * cart.quantity;
            }
        });
        setTotalPrice(total);
    }, [checkedItems, carts]);

    const handleQuantityChange = (itemId, newQuantity) => {
        // Update quantity in updatedQuantities state
        setUpdatedQuantities(prevState => ({
            ...prevState,
            [itemId]: newQuantity
        }));
    };


    return (
        <ChakraProvider>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Cart
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
                    <Heading>My Cart</Heading>
                    {carts.length > 0 ? (
                        <Table variant="striped" colorScheme="">
                            <Tbody>
                                {carts.map((cart) => (
                                    <Tr key={cart.id}>
                                        <Td>
                                            <Flex alignItems="center">
                                                <Checkbox
                                                    mr={4}
                                                    isChecked={checkedItems.some(item => item.id === cart.id)}
                                                    onChange={() =>
                                                        handleCheckboxChange(cart.id)
                                                    }
                                                />
                                                <Image
                                                    src={`/storage/${cart.item.image}`}
                                                    alt="wishlist item"
                                                    width={"90px"}
                                                />
                                                <Text ml={4}>
                                                    {cart.item.name} -{" "}
                                                    {cart.item.description}
                                                </Text>
                                            </Flex>
                                        </Td>
                                        <Td>Rp.{cart.item.price}/(pcs)</Td>
                                        <Td>
                                            <Flex
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <QuantitySelector
                                                    initialStock={cart.item.stock}
                                                    price={cart.item.price}
                                                    onChange={(newQuantity) =>
                                                        handleQuantityChange(cart.id, newQuantity)
                                                    }
                                                    initialQuantity={cart.quantity}
                                                />
                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Button
                                                onClick={() =>
                                                    handleRemove(cart.id)
                                                }
                                            >
                                                Remove
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                                <Tr>
                                    <Td colSpan="2" textAlign="right">
                                        Total ({checkedItems.length} produk):
                                    </Td>
                                    <Td>{totalPrice}.00</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    ) : (
                        <Text>Your Shopping Cart is empty.</Text>
                    )}
                    <InertiaLink href={route('payment.post')} data={{ totalPrice }}>Proceed to Payment</InertiaLink>
                    <Button colorScheme="blue" onClick={handleProceedToPayment}>Lanjutkan ke Pembayaran</Button>
                </Box>
            </AuthenticatedLayout>
        </ChakraProvider>
    );
};

export default Cart;
