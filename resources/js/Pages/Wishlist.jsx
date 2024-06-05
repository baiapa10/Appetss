import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage, Link as InertiaLink } from "@inertiajs/react";
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
    Wrap,
} from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessageHandler from "./FlashMessageHandler";

const Wishlist = ({ auth }) => {
    const { props } = usePage();
    const { list } = props;

    return (
        <ChakraProvider>
            <FlashMessageHandler>
                <AuthenticatedLayout
                    user={auth.user}
                    header={
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Wishlist
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
                        justify="center"
                        align="center"
                        p={5}
                    >
                        <Box
                            bg="bisque"
                            borderRadius="45px"
                            p={5}
                            w="full"
                            maxW="1200px"
                        >
                            <Heading
                                fontSize="60px"
                                fontWeight="bold"
                                align="center"
                                color="rgba(133, 81, 33, 0.8)"
                            >
                                My Wishlist
                            </Heading>
                            <Wrap justify="flex-start" spacing="30px">
                                {list.length > 0 ? (
                                    <Table variant="striped" colorScheme="">
                                        <Tbody>
                                            {list.map((wishlistItem) => (
                                                <Tr key={wishlistItem.id}>
                                                    <Td>
                                                        <InertiaLink href={`/item/${wishlistItem.item.id}`}>
                                                            <Flex
                                                                alignItems="center"
                                                                mr={12}
                                                                borderRadius={36}
                                                                transition="transform 0.2s, box-shadow 0.2s"
                                                                _hover={{
                                                                    transform: "scale(1.05)",
                                                                    boxShadow: "6px 0px 10px rgba(0, 0, 0, 0.3)"
                                                                }}
                                                            >
                                                                <Image
                                                                    src={`/storage/${wishlistItem.item.image}`}
                                                                    alt="wishlist item"
                                                                    width={"90px"}
                                                                    borderRadius={36}
                                                                />
                                                                <Box ml={4}>
                                                                    <Text fontWeight="bold">
                                                                        {wishlistItem.item.name}
                                                                    </Text>
                                                                    <Text fontSize="sm" color="gray.600">
                                                                        {wishlistItem.item.description}
                                                                    </Text>
                                                                </Box>
                                                            </Flex>
                                                        </InertiaLink>
                                                    </Td>
                                                    <Td>
                                                        <Button
                                                            fontSize="14px"
                                                            fontWeight="bold"
                                                            ml={-14}
                                                            bg="rgba(133, 81, 33, 1)"
                                                            color="white"
                                                            size="sm"
                                                            _hover={{
                                                                bg: "rgba(133, 81, 33, 0.8)",
                                                            }}
                                                            _active={{
                                                                bg: "rgba(133, 81, 33, 0.6)",
                                                            }}
                                                            onClick={() => {
                                                                Inertia.delete(
                                                                    `/wishlist/${wishlistItem.id}`
                                                                );
                                                            }}
                                                        >
                                                            Remove
                                                        </Button>
                                                    </Td>
                                                </Tr>
                                            ))}
                                            <Tr>
                                                <Td
                                                    colSpan="2"
                                                    textAlign="right"
                                                >
                                                    Total ({list.length} produk)
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                ) : (
                                    <Text>Your wishlist is empty.</Text>
                                )}
                            </Wrap>
                        </Box>
                    </Box>
                </AuthenticatedLayout>
            </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default Wishlist;
