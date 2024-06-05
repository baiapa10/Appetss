import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    Box,
    Flex,
    Input,
    Select,
    Container,
    Grid,
    GridItem,
    Button,
    Image,
    Text,
    Stack,
    SimpleGrid,
    useColorModeValue,
    ChakraProvider,
} from '@chakra-ui/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import FlashMessageHandler from '../FlashMessageHandler';
import PrimaryButton from "@/Components/PrimaryButton";

const Edit = ({ auth, item }) => {
    const [formData, setFormData] = useState({
        name: item.name || '',
        description: item.description || '',
        price: item.price || '',
        category_id: item.category_id || '',

        stock: item.stock || '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSend = {
            _method: 'put',
            ...formData,
        };

        Inertia.post(route('item.update', { item: item.id }), formDataToSend);
    };

    return (
        <ChakraProvider>
            <FlashMessageHandler>
                <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit</h2>}>
                    <Head title="Edit Item" />
                    <Box py={12}
                        bg={useColorModeValue("rgba(253, 201, 152, 1)")}
                        minH="100vh"
                        id="random-background-box"
                        bgImage={`url(/storage/logo/image.png)`}
                        bgSize="250px">
                        <Container maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                            <Text
                                textAlign="center"
                                fontSize="48px"
                                fontWeight="bold"
                                mb={4}
                                color="rgba(133, 81, 33, 0.8)"
                            >
                                Edit Item Form
                            </Text>
                            <Box bg="white" overflow="hidden" shadow="sm" rounded="lg">
                                <Box p={6} bg="white" borderBottom="1px" borderColor="gray.200">
                                    <Flex alignItems="center" justifyContent="space-between" mb={6}>
                                        <Link className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none" href={route("item.index")}>
                                            Back
                                        </Link>
                                    </Flex>
                                    <form onSubmit={handleSubmit}>
                                        <Flex flexDirection="column">
                                            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                                <GridItem colSpan={1}>
                                                    <InputLabel htmlFor="name" style={{ color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Name</InputLabel>
                                                    <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                                                </GridItem>
                                                <GridItem colSpan={1}>
                                                    <InputLabel htmlFor="price" style={{ color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Price</InputLabel>
                                                    <Input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
                                                </GridItem>
                                                <GridItem colSpan={1}>
                                                    <InputLabel htmlFor="name" style={{ color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Description</InputLabel>
                                                    <Input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                                                </GridItem>
                                                <GridItem colSpan={1}>
                                                    <InputLabel htmlFor="stock" style={{ color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Stock</InputLabel>
                                                    <Input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
                                                </GridItem>
                                            </Grid>
                                            <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={4}>
                                                <GridItem colSpan={1} mb={6}>
                                                    <InputLabel htmlFor="category_id" style={{ color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Category</InputLabel>
                                                    <Select name="category_id" value={formData.category_id} onChange={handleChange} placeholder="Select Category">
                                                        <option value="1">Dog - Sell</option>
                                                        <option value="2">Dog - Adopt</option>
                                                        <option value="3">Cat - Sell</option>
                                                        <option value="4">Cat - Adopt</option>
                                                        <option value="5">Fish - Sell</option>
                                                        <option value="6">Fish - Adopt</option>
                                                        <option value="7">Bird - Sell</option>
                                                        <option value="8">Bird - Adopt</option>
                                                        <option value="9">Reptile - Sell</option>
                                                        <option value="10">Reptile - Adopt</option>
                                                        <option value="11">Small Pets - Sell</option>
                                                        <option value="12">Small Pets - Adopt</option>
                                                        <option value="13">Equipment - Sell</option>
                                                    </Select>
                                                </GridItem>
                                                <GridItem colSpan={1}>
                                                    <InputLabel htmlFor="image" style={{ color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Image</InputLabel>
                                                    <Input type="file" name="image" onChange={handleImageChange} />
                                                </GridItem>
                                            </Grid>
                                                {formData.image && (
                                                    <Box
                                                        border="1px solid"
                                                        borderColor="gray.200"
                                                        borderRadius="44px"
                                                        p={4}
                                                        maxW="520px"
                                                        ml={326}
                                                        transition="transform 0.3s ease"
                                                        _hover={{ transform: "scale(1.1)" }}
                                                        mt={6}
                                                    >
                                                        <Text fontSize="lg" mb={2} fontWeight="bold" align="center" style={{
                                                                    color: "rgba(133, 81, 33, 1)",
                                                                    fontSize: "26px",
                                                                    fontWeight: "bold",
                                                                }}>Image Preview</Text>
                                                        <Image
                                                            src={URL.createObjectURL(formData.image)}
                                                            alt="Uploaded Image"
                                                            mt="2"
                                                            mb={6}
                                                            maxW="500px"
                                                        />
                                                    </Box>
                                                )}
                                        </Flex>
                                            <PrimaryButton
                                            className="ms-4"
                                    >
                                        Save
                                    </PrimaryButton>
                                    </form>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </AuthenticatedLayout>
            </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default Edit;
