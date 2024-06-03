import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { Head, useForm } from "@inertiajs/react";
import {
    Grid,
    GridItem,
    Box,
    Text,
    Flex,
    ChakraProvider,
} from "@chakra-ui/react";
import ApplicationLogoLogin from "@/Components/ApplicationLogoLogin";
import ApplicationLoginImage from "@/Components/ApplicationLoginImage";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <ChakraProvider>
            <GuestLayout>
                <Head title="Forgot Password" />
                <Flex justify="auto" h="100vh">
                    <Grid
                        w="full"
                        h="100vh"
                        templateRows={{ base: "repeat(2, 1fr)", md: "1fr" }}
                        templateColumns={{ base: "1fr", md: "60% 40%" }}
                        gap={0}
                        alignItems="column"
                        justifyContent="flex-end"
                    >
                        <GridItem
                            bg="rgba(253, 201, 152, 1)"
                            p={{ base: 42, md: 8 }}
                            boxShadow="md"
                            borderRadius={{ base: "none", md: "md" }}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Flex
                                alignItems="center"
                                flexDirection="column"
                                display="flex"
                            >
                                <ApplicationLoginImage className="w-20 h-20 fill-current text-gray-500 mb-4" />
                                <Text
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    mb={4}
                                    fontWeight="bold"
                                    color="black"
                                >
                                    Welcome
                                </Text>
                                <Text
                                    fontSize={{ base: "sm", md: "md" }}
                                    textAlign="center"
                                >
                                    Welcome to our Forgot Password page! We are delighted that you have chosen us as the platform to expand your knowledge and skills. Through this platform, you will find useful information to help you achieve your goals.
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem
                            bg="white-100"
                            p={{ base: 4, md: 8 }}
                            boxShadow="md"
                            borderRadius={{ base: "none", md: "md" }}
                            display="flex"
                            flexDirection="column"
                            // alignItems="center"
                            justifyContent="center"
                        >
                            <Flex
                                alignItems="center"
                                flexDirection="column"
                                display="flex"
                            >
                                <ApplicationLogoLogin className="w-20 h-20 fill-current text-gray-500 mb-4  " />
                                <Text
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    mb={4}
                                    fontWeight="bold"
                                    color="black"
                                >
                                    Hello, Welcome 👋👋👋
                                </Text>
                                <Text
                                    fontSize={{ base: "sm", md: "md" }}
                                    textAlign="center"
                                >
                                    Here, you will find a pet sales place that offers a unique shopping experience to meet your pet's needs.
                                </Text>
                            </Flex>
                            <div
                                className="mt-12 text-sm text-gray-600"
                                style={{
                                    fontFamily: "Fredoka One",
                                    color: "rgba(133, 81, 33, 1)",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                            >
                                Forgot your password? No problem. Just let us
                                know your email address and we will email you a
                                password reset link that will allow you to
                                choose a new one.
                            </div>

                            {status && (
                                <div className=" font-medium text-sm text-green-600">
                                    {status}
                                </div>
                            )}

                            <form
                                onSubmit={submit}
                                style={{
                                    justifyContent: "flex-end",
                                    borderRadius: "45px",
                                    maxWidth: "450px",
                                    width: "100%",
                                    margin: "0 auto",
                                    padding: "40px 20px",
                                }}
                            >
                                <InputLabel
                                        htmlFor="email"
                                        value="Email"
                                        style={{
                                            color: "rgba(133, 81, 33, 1)",
                                            fontSize: "16px",
                                            fontWeight: "bold",

                                        }}
                                    />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className=" block w-full"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                                <div>
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                        className="mt-4 block w-full"
                                        style={{
                                            color: "rgba(133, 81, 33, 1)",
                                            fontSize: "16px",
                                            fontWeight: "bold",

                                        }}
                                    />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Input password..."
                                        value={data.password}
                                        className=" block w-full"
                                        // autoComplete="password"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        borderColor="rgba(253, 201, 152, 1)"
                                        _focus={{
                                            borderColor:
                                                "rgba(253, 201, 152, 1)",
                                        }}
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                        style={{
                                            fontFamily: "Fredoka One",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Email Password Reset Link
                                    </PrimaryButton>
                                </div>
                            </form>
                        </GridItem>
                    </Grid>
                </Flex>
            </GuestLayout>
        </ChakraProvider>
    );
}
