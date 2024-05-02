import React, { useState } from "react";
import { Button, Flex, Text, Input } from "@chakra-ui/react";

const QuantitySelector = ({ initialStock, price, onChange }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    const handleIncrement = () => {
        if (quantity < initialStock) {
            setQuantity(quantity + 1);
            setTotalPrice((quantity + 1) * price);
        }
    };

    const handleInputChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= initialStock) {
            setQuantity(newQuantity);
            setTotalPrice(newQuantity * price);
            onChange(newQuantity); // Memanggil fungsi onChange dengan nilai kuantitas baru
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice((quantity - 1) * price);
        }
    };

    return (
        <>

            {/* <Flex > */}
                <Button size="sm" colorScheme="blue" mr={2} onClick={handleIncrement}>
                +
            </Button>
            <Text mr={2}>{quantity}</Text>
            <Button size="sm" colorScheme="red" onClick={handleDecrement}>
                -
            </Button>
            <Text mt={4} ml={2} color="rgba(0, 0, 0, 1)" fontFamily="Fredoka One" fontSize="30px">
                Total: Rp {totalPrice}
            </Text>
            {/* </Flex> */}
        </>
    );
};

export default QuantitySelector;
