import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
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

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone_number: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };

    return (
        <ChakraProvider>
            <GuestLayout>
                <Head title="Register" />
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
                                <div>
                                    <InputLabel
                                        htmlFor="name"
                                        value="Name"
                                        style={{
                                            fontFamily: "Fredoka One",
                                            color: "rgba(133, 81, 33, 1)",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email"
                                        style={{
                                            fontFamily: "Fredoka One",
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
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                        style={{
                                            fontFamily: "Fredoka One",
                                            color: "rgba(133, 81, 33, 1)",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                        style={{
                                            fontFamily: "Fredoka One",
                                            color: "rgba(133, 81, 33, 1)",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="phone_number"
                                        value="Phone Number"
                                        style={{
                                            fontFamily: "Fredoka One",
                                            color: "rgba(133, 81, 33, 1)",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    />

                                    <TextInput
                                        id="phone_number"
                                        type="text"
                                        name="phone_number"
                                        value={data.phone_number}
                                        className="mt-1 block w-full"
                                        autoComplete="tel"
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.phone_number}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Link
                                        href={route("login")}
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        style={{
                                            fontFamily: "Fredoka One",
                                            color: "rgba(133, 81, 33, 1)",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Already registered?
                                    </Link>

                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                        style={{
                                            fontFamily: "Fredoka One",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Register
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
