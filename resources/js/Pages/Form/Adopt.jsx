import React, { useState } from "react";
import {
    Box,
    Input,
    Textarea,
    Select,
    Button,
    FormLabel,
    FormErrorMessage,
    FormControl,
    Spinner,
    Image,
} from "@chakra-ui/react";

const Adopt = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        fetch("/api/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                description,
                location,
                price,
                category,
                image,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .then((data) => {
                onSubmit(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };

    return (
        <Box maxWidth="600px" mx="auto">
            <form onSubmit={handleSubmit}>
                <FormControl mb={4} isInvalid={error}>
                    <FormLabel htmlFor="name">Pet Name</FormLabel>
                    <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel htmlFor="location">Location</FormLabel>
                    <Input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel htmlFor="price">Price in Rupiah</FormLabel>
                    <Input
                        id="price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel htmlFor="category">Pet Category</FormLabel>
                    <Select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                    </Select>
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel htmlFor="image">Upload Image</FormLabel>
                    <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </FormControl>

                <Button
                    type="submit"
                    colorScheme="blue"
                    isLoading={loading}
                    loadingText="Submitting"
                >
                    Save
                </Button>
            </form>

            {image && (
                <Box mt={4}>
                    <Image
                        src={URL.createObjectURL(image)}
                        alt={`Preview of ${name}`}
                        maxWidth="300px"
                    />
                </Box>
            )}
        </Box>
    );
};

export default Adopt;
