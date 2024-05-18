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

const Edit = ({ auth, item }) => {
    const [formData, setFormData] = useState({
        name: item.name || '',
        description: item.description || '',
        price: item.price || '',
        category_id: item.category_id || '',
        location: item.location || '',
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
        <FlashMessageHandler>
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit</h2>}>
            <Head title="Edit Item" />
            <Box py={12}>
                <Container maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
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
                                            <InputLabel htmlFor="name" style={{ fontFamily: "Fredoka One", color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Name</InputLabel>
                                                <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                                            <Box mt="4" mb={4}>
                                                <InputLabel htmlFor="name" style={{ fontFamily: "Fredoka One", color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Description</InputLabel>
                                                    <Input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                                            </Box>
                                        </GridItem>
                                        <Box mb="4">
                                            <InputLabel htmlFor="name" style={{ fontFamily: "Fredoka One", color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Image</InputLabel>
                                                <Input type="file" name="image" onChange={handleImageChange} />
                                                {formData.image && (
                                                            <Image src={URL.createObjectURL(formData.image)} alt="Uploaded Image" mt="2" maxW="200px" />
                                                        )}
                                        </Box>
                                    </Grid>
                                        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel htmlFor="name" style={{ fontFamily: "Fredoka One", color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Category</InputLabel>
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
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel htmlFor="name" style={{ fontFamily: "Fredoka One", color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Price</InputLabel>
                                                        <Input
                                                            type="number"
                                                            name="price"
                                                            value={formData.price}
                                                            onChange={handleChange}
                                                            placeholder="Price" />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel htmlFor="name" style={{ fontFamily: "Fredoka One", color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Location</InputLabel>
                                                        <Input
                                                            type="text"
                                                            name="location"
                                                            value={formData.location}
                                                            onChange={handleChange}
                                                            placeholder="Location" />
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel htmlFor="name" style={{ fontFamily: "Fredoka One", color: "rgba(133, 81, 33, 1)", fontSize: "16px", fontWeight: "bold" }}>Stock</InputLabel>
                                                        <Input
                                                            type="number"
                                                            name="stock"
                                                            value={formData.stock}
                                                            onChange={handleChange}
                                                            placeholder="Stock" />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    <Button type="submit" colorScheme="blue">Submit</Button>
                                </Flex>
                            </form>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </AuthenticatedLayout>
       </FlashMessageHandler>
    );
};

export default Edit;
