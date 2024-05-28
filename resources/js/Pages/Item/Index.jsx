    import React, { useEffect, useHistory, useState } from "react";
import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    //Link,
    Text,
    Stack,
    SimpleGrid,
    useColorModeValue,
    ChakraProvider,
    Center,
    Image,
    Spacer,
} from "@chakra-ui/react";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessageHandler from "../FlashMessageHandler";

const Homepages = (props) => {
    const { auth } = props;
    const [modalDelete, setModalDelete] = useState(false);

    const categoryMap = {
        1: "Dog - Sell",
        2: "Dog - Adopt",
        3: "Cat - Sell",
        4: "Cat - Adopt",
        5: "Fish - Sell",
        6: "Fish - Adopt",
        7: "Bird - Sell",
        9: "Reptile - Sell",
        10: "Reptile - Adopt",
        11: "Small Pets - Sell",
        12: "Small Pets - Adopt",
        13: "Equipment - Sell",
    };

    useEffect(() => {
        const boxElement = document.getElementById("random-background-box");
        if (boxElement) {
            const randomX = Math.floor(Math.random() * 100) + 1; // Angka acak untuk posisi horizontal
            const randomY = Math.floor(Math.random() * 200) + 1; // Angka acak untuk posisi vertikal
            boxElement.style.backgroundPosition = `${randomX}% ${randomY}%`;
        }
    }, []);

    return (
        <ChakraProvider>
            <FlashMessageHandler>
                <AuthenticatedLayout
                    user={auth.user}
                    header={
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Homepages
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
                        <Flex
                            justifyContent="flex-end"
                            alignItems="center"
                            p={4}
                        >
                        </Flex>
                        <Flex
                            px={5}
                            py={4}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Text
                                fontFamily="Fredoka One"
                                color="rgba(133, 81, 33, 1)"
                                fontSize="38px"
                                fontWeight="bold"
                                ml={6}
                            >
                                Your Items
                            </Text>

                            <Link href={route("item.create")}>
                                <Button
                            
                                    mr={1200}
                                    bg="rgba(203, 142, 85, 1)"
                                    size="lg"
                                    borderRadius="full"
                                    boxShadow="0px 4px 6px rgba(133, 81, 33, 1)"
                                    style={{
                                        fontSize: "24px",
                                        padding: "0 20px",
                                    }}
                                    >
                                     +
                                </Button>
                            </Link>
                                    
                        </Flex>
                        <Box display="flex" flexWrap="wrap">
                            {props.pets ? (
                                props.pets.map((data, i) => (
                                    <Box
                                        key={i}
                                        ml={8}
                                        mr={2}
                                        mb={4}
                                        flexBasis="calc(33.33% - 250px)"
                                        boxShadow="0px 0px 2px rgba(0, 0, 0, 0.2)"
                                        border="1px solid #ccc"
                                        borderRadius="xl"
                                        bg={useColorModeValue(
                                            "gray.200",
                                            "gray.700"
                                        )}
                                        borderColor="black"
                                        p={4}
                                    >
                                        <Image
                                            src={`/storage/${data.image}`}
                                            alt={data.name}
                                            style={{
                                                maxWidth: "100%",
                                                height: "150px",
                                            }}
                                        />
                                        <Heading size="md" mb={2} mt={4}>
                                            {data.name}
                                        </Heading>
                                        <Text mt={2}>
                                           {data.description}
                                        </Text>
                                        <Text>
                                             Price: Rp.{" "}
                                            {Number(
                                                data.price
                                            ).toLocaleString()}
                                        </Text>
                                        <Text>Location: {data.location}</Text>
                                        <Text>
                                            Type:{" "}
                                            {categoryMap[data.category_id]}
                                        </Text>
                                        <Text>
                                        Posted at: {new Date(data.created_at).toLocaleDateString()}
                                        </Text>
                                        <Button
                                            as="a"
                                            href={`/item/${data.id}`}
                                            mt={4}
                                           // mb={2}
                                            fontFamily="Fredoka One"
                                            
                                            bg="rgba(133, 81, 33, 1)"
                                            color="white"
                                            fontSize="12px"
                                            fontWeight="bold"
                                            _hover={{
                                                bg: "rgba(133, 81, 33, 0.8)",
                                            }}
                                            _active={{
                                                bg: "rgba(133, 81, 33, 0.6)",
                                            }}
                                        >
                                            View Details
                                        </Button>
                                        <Button
                                            as="a"
                                            href={`/item/${data.id}/edit`}
                                            mt={4}
                                            ml={1}
                                            //mb={2}
                                            
                                            fontFamily="Fredoka One"
                                            
                                            bg="rgba(133, 81, 33, 1)"
                                            color="white"
                                            fontSize="12px"
                                            fontWeight="bold"
                                            _hover={{
                                                bg: "rgba(133, 81, 33, 0.8)",
                                            }}
                                            _active={{
                                                bg: "rgba(133, 81, 33, 0.6)",
                                            }}

                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            fontFamily="Fredoka One"
                                            fontSize="12px"
                                            fontWeight="bold"
                                           ml={1}
                                           mt={4}
                                            bg="rgba(133, 81, 33, 1)"
                                            color="white"
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        "Are you sure you wish to delete this item?"
                                                    )
                                                )
                                                    Inertia.delete(
                                                        `/item/${data.id}`
                                                    );
                                            }}
                                            _hover={{
                                                bg: "rgba(133, 81, 33, 0.8)",
                                            }}
                                            _active={{
                                                bg: "rgba(133, 81, 33, 0.6)",
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                ))
                            ) : (
                                <Text>No pets found.</Text>
                            )}
                        </Box>
                        <Flex
                            px={5}
                            py={4}
                            justifyContent="space-between"
                            alignItems="center"
                        ></Flex>
                        <Box display="flex" flexWrap="wrap">
                            {modalDelete && alert("berhasil dihapus")}
                        </Box>
                    </Box>
                </AuthenticatedLayout>
            </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default Homepages;
