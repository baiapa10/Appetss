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
    Table,
    Tbody,
    Tr,
    Td,
    Checkbox,
} from "@chakra-ui/react";
import { Head, Link,  } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import QuantitySelector from "./Item/partials/QuantitySelector";

const Cart = ({ auth }) => {
    const { props } = usePage();
    const { carts } = props || [];
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkedItems, setCheckedItems] = useState([]);


    const handleProceedToPayment = () => {
        Inertia.post(`/payment`, { props: { totalPrice: totalPrice } });
    };







    // Function to handle item removal from the cart
    const handleRemove = (itemId) => {
        const cartItem = carts.find((item) => item.id === itemId); // Cari item keranjang yang sesuai dengan itemId
        Inertia.delete(`/cart/${itemId}`, {
            data: { quantity: cartItem.quantity },
        });
    };

    const handleCheckboxChange = (itemId) => {
        if (checkedItems.includes(itemId)) {
            setCheckedItems(checkedItems.filter((item) => item !== itemId));
        } else {
            setCheckedItems([...checkedItems, itemId]);
        }
    };

    useEffect(() => {
        let total = 0;
        carts.forEach((cart) => {
            if (checkedItems.includes(cart.id)) {
                total += parseFloat(cart.item.price) * cart.quantity;
            }
        });
        setTotalPrice(total);
    }, [checkedItems, carts]);


    const handleQuantityChange = (itemId, newQuantity) => {
        // Update quantity in carts state
        const updatedCarts = carts.map((cart) => {
            if (cart.id === itemId) {
                return { ...cart, quantity: newQuantity };
            }
            return cart;
        });

        // Update total price based on quantity changes
        let total = 0;
        updatedCarts.forEach((cart) => {
            if (checkedItems.includes(cart.id)) {
                total += parseFloat(cart.item.price) * cart.quantity;
            }
        });
        setTotalPrice(total);
    };

    const calculateTotalPrice = (wishlistItem) => {
        if (
            wishlistItem.item &&
            wishlistItem.item.price &&
            wishlistItem.quantity
        ) {
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
                                                    isChecked={checkedItems.includes(
                                                        cart.id
                                                    )} // Tentukan status checked berdasarkan apakah item ada dalam array checkedItems
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            cart.id
                                                        )
                                                    } // Panggil fungsi handleCheckboxChange saat checkbox diubah
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
                                                    initialStock={
                                                        cart.item.stock
                                                    }
                                                    price={cart.item.price}
                                                    onChange={(newQuantity) =>
                                                        handleQuantityChange(
                                                            cart.id,
                                                            newQuantity
                                                        )
                                                    }
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
                    <Button colorScheme="blue" onClick={handleProceedToPayment}>Lanjutkan ke Pembayaran</Button>
                </Box>
            </AuthenticatedLayout>
        </ChakraProvider>
    );
};

export default Cart;
