import React, { useEffect } from "react";
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
    // useEffect(() => {
    //     document.title = "My Order";
    // }, []);

    useEffect(() => {
        document.title = "My Order";

        const handleBrowserBackButton = (event) => {
            event.preventDefault();
            Inertia.visit("/homepages");
        };

        window.addEventListener("popstate", handleBrowserBackButton);

        return () => {
            window.removeEventListener("popstate", handleBrowserBackButton);
        };
    }, []);

    const transactionsWithIndex = transactions.map((transaction, index) => ({
        ...transaction,
        originalIndex: index
    }));

    // Separate transactions into not received and received
    const notReceivedTransactions = transactionsWithIndex.filter(transaction => transaction.status === 1);
    const receivedTransactions = transactionsWithIndex.filter(transaction => transaction.status === 2);

    notReceivedTransactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Concatenate not received and received transactions, with received at the end
    const sortedTransactions = [...notReceivedTransactions, ...receivedTransactions];
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
                    align="flex-start"
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
                            mb={4}
                        >
                            My Order
                        </Heading>
                        <Wrap
                            justify="center"
                            spacing="30px"
                            mt={6}
                        >
                            {sortedTransactions.map((transaction, index) => (
                                <WrapItem key={transaction.id} maxW="360px" >
                                    <Box
                                        borderWidth="6px"
                                        borderRadius="45px"
                                        p={4}
                                        w="150%"
                                        align="flex-start"
                                    >
                                        <Heading as="h2" size="md">
                                            Transaction {transaction.originalIndex + 1}
                                        </Heading>
                                        <Text mt={2}>
                                            Total Price: Rp.{" "}
                                            {Number(
                                                transaction.total_price
                                            ).toLocaleString()}
                                        </Text>
                                        <Text>
                                            Date: {new Date(transaction.created_at).toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}
                                        </Text>
                                        <Text>
                                            Address: {transaction.address}
                                        </Text>

                                        <Flex
                                            direction="column"
                                            align="start"
                                            justify="space-between"
                                        >
                                            <Text>
                                                Status: {transaction.status === 1 ? "Not Received" : "Already Received"}
                                            </Text>

                                            {transaction.status === 1 && (
                                                <Button
                                                    fontSize="14px"
                                                    fontWeight="bold"
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
                                                        if (window.confirm("Are you sure you want to mark this item as received?")) {
                                                            handleReceive(transaction.id);
                                                        }
                                                    }}
                                                >
                                                    Item already received?
                                                </Button>
                                            )}
                                            {transaction.status === 2 && (
                                                <Button
                                                    bg="green.500"
                                                    color="white"
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
