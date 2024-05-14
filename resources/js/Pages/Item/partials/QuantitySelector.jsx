import React, { useState, useEffect } from "react";
import { Button, Flex, Text, Input } from "@chakra-ui/react";

const QuantitySelector = ({ initialStock, price, onChange, initialQuantity }) => {
    //const [quantity, setQuantity] = useState(1);
    const [quantity, setQuantity] = useState(initialQuantity || 1); // Use initialQuantity here
    const [totalPrice, setTotalPrice] = useState(price * initialQuantity); // Calculate initial total price based on initialQuantity
    useEffect(() => {
        // Ketika harga atau stok awal berubah, pastikan total harga diperbarui
        onChange(quantity); // Memanggil fungsi onChange dengan nilai kuantitas baru
    }, [quantity, onChange]);

    const handleIncrement = () => {
        if (quantity < initialStock) {
            setQuantity(quantity + 1);
        }
    };

    const handleInputChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= initialStock) {
            setQuantity(newQuantity);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <Button size="sm" colorScheme="blue" mr={2} onClick={handleIncrement}>
                +
            </Button>
            <Input type="number" value={quantity} onChange={handleInputChange} size="sm" w="60px" textAlign="center" />
            <Button size="sm" colorScheme="red" onClick={handleDecrement}>
                -
            </Button>
        </>
    );
};

export default QuantitySelector;
