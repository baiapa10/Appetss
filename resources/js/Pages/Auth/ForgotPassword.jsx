import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
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
                                    Selamat Datang
                                </Text>
                                <Text
                                    fontSize={{ base: "sm", md: "md" }}
                                    textAlign="center"
                                >
                                    Selamat datang di halaman login kami! Kami
                                    senang Anda memilih kami sebagai platform
                                    untuk memperluas pengetahuan dan
                                    keterampilan Anda. Melalui platform ini,
                                    informasi yang berguna untuk membantu Anda
                                    mencapai tujuan Anda.
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
                                    Hello, Selamat Datang 👋👋👋
                                </Text>
                                <Text
                                    fontSize={{ base: "sm", md: "md" }}
                                    textAlign="center"
                                >
                                    Di sini, Anda akan menemukan tempat
                                    penjualan hewan yang menawarkan pengalaman
                                    belanja unik untuk memenuhi kebutuhan hewan
                                    peliharaan Anda.
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
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />

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
