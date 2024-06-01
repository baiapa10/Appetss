import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    //Link,
    Text,
    Container,
    Stack,
    SimpleGrid,
    useColorModeValue,
    ChakraProvider,
    Center,
    Select,
    Image,
    FormLabel,
    FormControl,
    Grid,
    GridItem,
} from "@chakra-ui/react";

const Creates = (props) => {
    const { data, setData, errors, processing, post } = useForm({
        name: "",
        description: "",
        category_id: "",
        price: "",
        location: "",
        stock: "",
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        if (!data.category_id) {
            console.error("Category is required");
            return;
        }
        post(route("item.store"), {
            data: data,
            onSuccess: () => {
                console.log("Data berhasil disimpan!");
                Inertia.visit("/item");
            },
            onError: (errors) => {
                console.error("Gagal menyimpan data:", errors);
            },
        });
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setData("image", file);
        }
    }

    return (
        <ChakraProvider>
            <AuthenticatedLayout
                auth={props.auth}
                user={props.auth.user}
                errors={props.errors}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create items
                    </h2>
                }
            >
                <Head title="Create Item" />
                <Box
                    py={12}
                    bg={useColorModeValue("rgba(253, 201, 152, 1)")}
                    minH="100vh"
                    id="random-background-box"
                    bgImage={`url(/storage/logo/image.png)`}
                    bgSize="250px"
                >
                    <Container
                        maxW="7xl"
                        mx="auto"
                        px={{ base: 4, sm: 6, lg: 8 }}
                    >
                        <Text
                            textAlign="center"
                            fontSize="48px"
                            fontWeight="bold"
                            mb={4}
                            color="rgba(133, 81, 33, 0.8)"
                        >
                            Create Item Form
                        </Text>
                        <Box
                            bg="white"
                            overflow="hidden"
                            shadow="sm"
                            rounded="lg"
                        >
                            <Box
                                p={6}
                                bg="white"
                                borderBottom="1px"
                                borderColor="gray.200"
                            >
                                <Flex
                                    alignItems="center"
                                    justifyContent="space-between"
                                    mb={6}
                                >
                                    <Link
                                        className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                        href={route("item.index")}
                                    >
                                        Back
                                    </Link>
                                </Flex>
                                <form name="createForm" onSubmit={handleSubmit}>
                                    <Flex flexDirection="column">
                                        <Grid
                                            templateColumns="repeat(2, 1fr)"
                                            gap={6}
                                        >
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel
                                                        htmlFor="name"
                                                        style={{
                                                            color: "rgba(133, 81, 33, 1)",
                                                            fontSize: "16px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        Name
                                                    </InputLabel>
                                                    <TextInput
                                                        id="name"
                                                        name="name"
                                                        value={data.name}
                                                        className="mt-1 block w-full"
                                                        autoComplete="name"
                                                        isFocused={true}
                                                        onChange={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <InputError
                                                        message={errors.name}
                                                        className="mt-2"
                                                    />
                                                </Box>
                                                <Box mb="4">
                                                    <InputLabel
                                                        htmlFor="description"
                                                        value="Description"
                                                        style={{
                                                            color: "rgba(133, 81, 33, 1)",
                                                            fontSize: "16px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        Description
                                                    </InputLabel>
                                                    <TextInput
                                                        id="description"
                                                        name="description"
                                                        value={data.description}
                                                        className="mt-1 block w-full"
                                                        autoComplete="name"
                                                        isFocused={true}
                                                        onChange={(e) =>
                                                            setData(
                                                                "description",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.description
                                                        }
                                                        className="mt-2"
                                                    />
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel
                                                        htmlFor="image"
                                                        value="Upload Image"
                                                        style={{
                                                            color: "rgba(133, 81, 33, 1)",
                                                            fontSize: "16px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        Image
                                                    </InputLabel>
                                                    <Input
                                                        type="file"
                                                        name="image"
                                                        onChange={
                                                            handleImageChange
                                                        }
                                                    />
                                                    {data.image && (
                                                        <Image
                                                            src={URL.createObjectURL(
                                                                data.image
                                                            )}
                                                            alt="Uploaded Image"
                                                            mt="2"
                                                            maxW="200px"
                                                        />
                                                    )}
                                                    <InputError
                                                        message={errors.image}
                                                        className="mt-2"
                                                    />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                        <Grid
                                            templateColumns="repeat(2, 1fr)"
                                            gap={6}
                                        >
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel
                                                        htmlFor="category_id"
                                                        value="Category"
                                                        style={{
                                                            color: "rgba(133, 81, 33, 1)",
                                                            fontSize: "16px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        Category
                                                    </InputLabel>
                                                    <Select
                                                        className="w-full px-4 py-2"
                                                        name="category_id"
                                                        value={data.category_id}
                                                        onChange={(e) =>
                                                            setData(
                                                                "category_id",
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            Select Category
                                                        </option>
                                                        <option value="1">
                                                            Dog - Sell
                                                        </option>
                                                        <option value="2">
                                                            Dog - Adopt
                                                        </option>
                                                        <option value="3">
                                                            Cat - Sell
                                                        </option>
                                                        <option value="4">
                                                            Cat - Adopt
                                                        </option>
                                                        <option value="5">
                                                            Fish - Sell
                                                        </option>
                                                        <option value="6">
                                                            Fish - Adopt
                                                        </option>
                                                        <option value="7">
                                                            Bird - Sell
                                                        </option>
                                                        <option value="9">
                                                            Reptile - Sell
                                                        </option>
                                                        <option value="10">
                                                            Reptile - Adopt
                                                        </option>
                                                        <option value="11">
                                                            Small Pets - Sell
                                                        </option>
                                                        <option value="12">
                                                            Small Pets - Adopt
                                                        </option>
                                                        <option value="13">
                                                            Equipment - Sell
                                                        </option>
                                                    </Select>
                                                    <InputError
                                                        message={
                                                            errors.category_id
                                                        }
                                                        className="mt-2"
                                                    />
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel
                                                        htmlFor="price"
                                                        value="Price"
                                                        style={{
                                                            color: "rgba(133, 81, 33, 1)",
                                                            fontSize: "16px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        Price
                                                    </InputLabel>
                                                    <TextInput
                                                        id="price"
                                                        name="price"
                                                        value={data.price}
                                                        className="mt-1 block w-full"
                                                        autoComplete="price"
                                                        isFocused={true}
                                                        onChange={(e) =>
                                                            setData(
                                                                "price",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <InputError
                                                        message={errors.price}
                                                        className="mt-2"
                                                    />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                        <Grid
                                            templateColumns="repeat(2, 1fr)"
                                            gap={6}
                                        >
                                            <GridItem colSpan={1}>
                                                <Box mb="4">
                                                    <InputLabel
                                                        htmlFor="location"
                                                        value="Location"
                                                        style={{
                                                            color: "rgba(133, 81, 33, 1)",
                                                            fontSize: "16px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        Location
                                                    </InputLabel>
                                                    <TextInput
                                                        id="location"
                                                        name="location"
                                                        value={data.location}
                                                        className="mt-1 block w-full"
                                                        autoComplete="location"
                                                        isFocused={true}
                                                        onChange={(e) =>
                                                            setData(
                                                                "location",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.location
                                                        }
                                                        className="mt-2"
                                                    />
                                                </Box>
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                {/* Stock Field */}
                                                <Box mb="4">
                                                    <InputLabel
                                                        htmlFor="stock"
                                                        value="Stock"
                                                        style={{
                                                            color: "rgba(133, 81, 33, 1)",
                                                            fontSize: "16px",
                                                            fontWeight: 900,
                                                        }}
                                                    >
                                                        Stock
                                                    </InputLabel>
                                                    <TextInput
                                                        id="stock"
                                                        name="stock"
                                                        value={data.stock}
                                                        className="mt-1 block w-full"
                                                        autoComplete="stock"
                                                        isFocused={true}
                                                        onChange={(e) =>
                                                            setData(
                                                                "stock",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <InputError
                                                        message={errors.stock}
                                                        className="mt-2"
                                                    />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </Flex>
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        Save
                                    </PrimaryButton>
                                </form>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </AuthenticatedLayout>
        </ChakraProvider>
    );
};

export default Creates;
