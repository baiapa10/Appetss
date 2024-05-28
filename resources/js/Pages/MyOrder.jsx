import React from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    Box,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    Button,
    VStack,
    ChakraProvider,
    Wrap,
    WrapItem,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessageHandler from "./FlashMessageHandler";

const MyOrder = ({ auth, transactions }) => {
    const handleReceive = (id) => {
        Inertia.put(`/transactions/${id}`, { status: 2 });
    };

    return (
        <ChakraProvider>
            <FlashMessageHandler >
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        My Order
                    </h2>
                }
            >
                <Flex
                    bg={useColorModeValue("rgba(253, 201, 152, 1)")}
                    minH="100vh"
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
                            fontFamily="Fredoka One"
                            fontSize="60px"
                            fontWeight="bold"
                            align="center"
                            color="rgba(133, 81, 33, 0.8)"
                        >
                            My Order
                        </Heading>
                        <Wrap
                            justify="center"
                            spacing="30px"
                            mt={6}
                            align="center"
                        >
                            {transactions.map((transaction) => (
                                <WrapItem key={transaction.id} maxW="360px">
                                    <Box
                                        borderWidth="6px"
                                        borderRadius="45px"
                                        p={4}
                                        w="100%"
                                    >
                                        <Heading as="h2" size="md">
                                            Transaction {transaction.id}
                                        </Heading>
                                        <Text mt={2}>
                                            Total Price: Rp.{" "}
                                            {Number(
                                                transaction.total_price
                                            ).toLocaleString()}
                                        </Text>
                                        <Flex
                                            align="center"
                                            justify="space-between"
                                        >
                                            <Text>
                                                Status: {transaction.status}
                                            </Text>
                                            {transaction.status === 1 && (
                                                <Button
                                                    fontFamily="Fredoka One"
                                                    fontSize="14px"
                                                    fontWeight="bold"
                                                    ml={8}
                                                    bg="rgba(133, 81, 33, 1)"
                                                    color="white"
                                                    size="sm"
                                                    _hover={{
                                                        bg: "rgba(133, 81, 33, 0.8)",
                                                    }}
                                                    _active={{
                                                        bg: "rgba(133, 81, 33, 0.6)",
                                                    }}
                                                    onClick={() =>
                                                        handleReceive(
                                                            transaction.id
                                                        )
                                                    }
                                                >
                                                    Item already received?
                                                </Button>
                                            )}
                                            {transaction.status === 2 && (
                                                <Button
                                                    bg="green.500"
                                                    color="white"
                                                    ml={4}
                                                    _hover={{ bg: "green.600" }}
                                                    isDisabled
                                                >
                                                    Item already received
                                                </Button>
                                            )}
                                        </Flex>
                                        <Heading as="h3" size="sm" mt={2}>
                                            Items:
                                        </Heading>
                                        <UnorderedList>
                                            {transaction.items.map((item) => (
                                                <ListItem key={item.id}>
                                                    {item.name} (Quantity:{" "}
                                                    {item.quantity})
                                                </ListItem>
                                            ))}
                                        </UnorderedList>
                                    </Box>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>
                </Flex>
            </AuthenticatedLayout>
            </FlashMessageHandler>
        </ChakraProvider>
    );
};

export default MyOrder;
