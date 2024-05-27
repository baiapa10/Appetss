import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Inertia } from "@inertiajs/inertia";
// import { InertiaLink } from '@inertiajs/inertia-react';
// import { Link } from '@inertiajs/react';
import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    Link,
    Text,
    Stack,
    SimpleGrid,
    useColorModeValue,
    ChakraProvider,
    Center,
    Container,
    Image,
    VStack,
    Avatar,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const handleCategoryClick2 = (category) => {
        Inertia.get("/homepages", { category: category });
    };
    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.visit(route("homepages.search", { search: searchQuery }), {
            preserveState: true,
            method: "get",
        });
    };
    const handleCategoryClick = (type) => {
        Inertia.get("/homepages", { type: type });
    };

    const handleLogout = () => {
        Inertia.post(
            route("logout"),
            {},
            {
                onFinish: () => {
                    Inertia.visit(route("login"));
                },
            }
        );
    };
    return (
        <ChakraProvider>
            <Box
                minH="100vh"
                bg={useColorModeValue("rgba(203, 142, 85, 1)")}
                py={{ base: "6", sm: "3", lg: "4" }}
                borderBottom="4px"
            >
                <Box as="nav" bg="" borderBottom="1px" borderColor="gray.500">
                    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <Flex alignItems="center" mr={12}>
                                    <Link href="/homepages">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </Flex>

                                <Flex
                                    display={{ base: "none", sm: "flex" }}
                                    spaceX={8}
                                    mt={{ base: "-px", sm: "0" }}
                                    ml={{ base: "0", sm: 10 }}
                                >
                                    <Flex
                                        px={7}
                                        w="700px"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        mb={5}
                                    >
                                        <form
                                            onSubmit={handleSearch}
                                            style={{
                                                display: "flex",
                                                width: "100%",
                                            }}
                                        >
                                            <InputGroup>
                                                <Input
                                                    placeholder="Search Products..."
                                                    borderRadius="40px"
                                                    flexGrow={1}
                                                    backgroundColor="white"
                                                    value={searchQuery}
                                                    onChange={(e) =>
                                                        setSearchQuery(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button
                                                        onClick={handleSearch}
                                                        h="1.75rem"
                                                        size="sm"
                                                        bg="transparent"
                                                        p={0}
                                                    >
                                                        <Image
                                                            src="/storage/logo/search.png"
                                                            alt="Search"
                                                            width="21px"
                                                        />
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                        </form>
                                    </Flex>
                                </Flex>
                            </div>
                            <Flex
                                isplay={{ base: "none", sm: "flex" }}
                                alignItems="center"
                                marginLeft="6"
                                mb={4}
                            >
                                      <Link href="/chatify">
                            <Image
                                src="/storage/pet_images/chat.png"
                                alt="Appets iklan"
                                mr={"2"}
                                width="70px"
                                height="70px"
                                
                                
                            />
                        </Link>
                        <Link href="/wishlist">
                                    <Image
                                        src="/storage/logo/save.png"
                                        alt="Appets iklan"
                                        mr={"3"}
                                        width="41px"
                                        height="41px"
                                        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                                    />
                                </Link>
                                <Link href="/cart">
                                    <Image
                                        src="/storage/logo/shop.png"
                                        alt="Appets iklan"
                                        mr={"4"}
                                        width="61px"
                                        height="61px"
                                        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                                    />
                                </Link>
                                <div className="ms-3 relative ">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button type="button">
                                                    <Avatar
                                                        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                                                        name={user.name}
                                                        src="https://bit.ly/broken-link"
                                                    />
                                                    <svgl
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svgl>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("item.index")}
                                            >
                                                My Store
                                            </Dropdown.Link>
                                            <Dropdown.Link href="/myorder">
                                                My Order
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                as="button"
                                                onClick={handleLogout}
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </Flex>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Box
                        display={{
                            base: showingNavigationDropdown ? "block" : "none",
                            sm: "none",
                        }}
                    >
                        <VStack spacing={3} pt={2} pb={3}>
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </VStack>

                        <Box
                            pt={4}
                            pb={1}
                            borderTop="1px"
                            borderColor="gray.200"
                        >
                            <Box px={4}>
                                <Text
                                    fontWeight="medium"
                                    fontSize="base"
                                    color="gray.800"
                                >
                                    {user.name}
                                </Text>
                                <Text
                                    fontWeight="medium"
                                    fontSize="sm"
                                    color="gray.500"
                                >
                                    {user.email}
                                </Text>
                            </Box>
                            <Box mt={3} spacing={1}>
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>

                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {header && (
                    <header
                        sx={{
                            bg: useColorModeValue(
                                "rgba(203, 142, 85, 1)",
                                "rgba(203, 142, 85, 1, 0.6)"
                            ),
                            boxShadow: "md",
                        }}
                    >
                        <Container
                            maxW="7xl"
                            px={{ base: "4", sm: "6", lg: "8" }}
                            py={{ base: "6", sm: "6", lg: "2" }}
                            borderBottom="1px"
                            borderColor="rgba(255, 255, 255, 1)"
                            position="relative"
                        >
                            <Flex
                                justifyContent="space-between"
                                fontFamily="Fredoka One"
                                color="rgba(255, 255, 255, 1)"
                                fontSize="38px"
                                fontWeight="bold"
                                borderTop=""
                            >
                                <Link
                                    onClick={() => handleCategoryClick("adopt")}
                                >
                                    Adopt{" "}
                                </Link>
                                <Link
                                    onClick={() => handleCategoryClick("Sell")}
                                >
                                    Buy
                                </Link>
                                <Link
                                    onClick={() =>
                                        handleCategoryClick2("equipment")
                                    }
                                >
                                    Equipment and Foods
                                </Link>
                            </Flex>
                        </Container>
                    </header>
                )}
                <main>{children}</main>
            </Box>
        </ChakraProvider>
    );
}
