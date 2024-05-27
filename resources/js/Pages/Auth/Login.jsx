import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
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

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <ChakraProvider>
            <GuestLayout>
                <Head title="Log in" />
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
                                {status && (
                                    <div className="mb-4 font-medium text-sm text-green-600">
                                        {status}
                                    </div>
                                )}
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
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        borderColor="rgba(253, 201, 152, 1)"
                                        _focus={{
                                            borderColor:
                                                "rgba(253, 201, 152, 1)",
                                        }}
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
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="block mt-4">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span
                                            className="ms-2 text-sm text-gray-600"
                                            style={{
                                                fontFamily: "Fredoka One",
                                                color: "rgba(133, 81, 33, 1)",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                                <Flex
                                    alignItems="center"
                                    justifyContent="center"
                                    mt={4}
                                >
                                    <Link
                                        href={route("register")}
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        style={{
                                            fontFamily: "Fredoka One",
                                            color: "rgba(133, 81, 33, 1)",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Don't have an account?
                                    </Link>
                                </Flex>
                                <div className="flex items-center justify-end mt-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route("password.request")}
                                            className="mr-7 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            style={{
                                                fontFamily: "Fredoka One",
                                                color: "rgba(133, 81, 33, 1)",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                        style={{
                                            fontFamily: "Fredoka One",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Log in
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
