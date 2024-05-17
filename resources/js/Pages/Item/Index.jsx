import React, {useEffect, useHistory, useRef, useState } from 'react';
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
    ChakraProvider ,
    Center,
    Image,
    Spacer,
} from '@chakra-ui/react';
import { Head, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


const Homepages = (props) => {
    const { auth } = props;
    // ipe
    const [modalDelete, setModalDelete] = useState(false)

    const handleDelete = (e, id) => {
        e.preventDefault();
        if (window.confirm('Are you sure you wish to delete this item?')) {
            Inertia.delete(`/item/${id}`).then(() => {
                setModalDelete(true);
                setTimeout(() => {
                    setModalDelete(false);
                }, 3000);
            }).catch(error => {
                console.error('Error deleting item:', error);
            });
        }
    };

    const gridRef = useRef(null);
    // const navigate = useNavigate();

    const scrollRight = () => {
        if (gridRef.current) {
        gridRef.current.scrollBy({
            left: 200, // Adjust this value as needed
            behavior: 'smooth',
        });
        }
    };

    const redirectToWelcomePage = () => {
        fetch('/homepages')
            .then(response => {
                if (response.ok) {
                    // Jika permintaan berhasil, arahkan pengguna ke halaman homepages di Laravel
                    window.location.href = '/dashboard';
                } else {
                    // Handle jika ada kesalahan dalam permintaan
                    console.error('Failed to redirect to /homepages');
                }
            })
            .catch(error => {
                // Handle kesalahan dalam melakukan permintaan
                console.error('Error redirecting to /homepages:', error);
            });
    };

    const backgroundImages = [
        "/storage/logo/image.png",
        "/storage/logo/image_copy.png"
    ];

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
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Homepages</h2>}
        >
        <Head title={props.title} />
        <Box bg={useColorModeValue("rgba(253, 201, 152, 1)")} minH="100vh"
        // bgImage={`url(/storage/logo/image.png)`}
        // bgSize="250px"
        // bgPosition="random"

        id="random-background-box"
        // minH="100vh"
        bgImage={`url(/storage/logo/image.png)`}
        bgSize="250px"

        >
        <Flex
            // bg={useColorModeValue('gray.200', 'gray.700')}
            // px={5}
            // py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            {/* <Button as={Link} href="/items/create" colorScheme="teal" size="sm" mt="4">
    Add New Item
</Button> */}
            <Link href={route('item.create')}>
                            <Button
                                colorScheme="teal"
                                size="lg"
                                borderRadius="full"
                                boxShadow="0px 4px 6px rgba(133, 81, 33, 1)"
                                style={{ fontSize: '24px', padding: '0 20px' }}
                            >
                               create new item +
                            </Button>
                        </Link>
            {/* <Text>Sitewide savings are here! Save 20% OFF Hands of part favorites</Text> */}
            {/* <Link color="teal.500">--Ads Sample</Link> */}
        </Flex>

        <Flex
            // bg={useColorModeValue('gray.200', 'gray.700')}
            px={5}
            py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            <Text fontFamily="Fredoka One" color="rgba(133, 81, 33, 1)" fontSize="38px" fontWeight="bold" ml={6}>Your Items</Text>
        </Flex>
        <Box display="flex" flexWrap="wrap"  >
        {props.pets ? (
    props.pets.map((data, i) => (
        <Box key={i} ml={8} mr={2} mb={4} flexBasis="calc(33.33% - 250px)" boxShadow="0px 0px 2px rgba(0, 0, 0, 0.2)" border="1px solid #ccc" borderRadius="xl" bg={useColorModeValue('gray.200', 'gray.700')} borderColor="black" p={4}>
            <Image
                src={`/storage/${data.image}`}
                alt={data.name}
                style={{ maxWidth: '100%', height: '150px' }}
            />
            <Heading size="md" mb={2}>Name: {data.name}</Heading>
            <Text mt={2}>Description: {data.description}</Text>
            <Text>Price: {data.price}</Text>
            <Text>Location: {data.location}</Text>
            {/* Detail button using Inertia Link */}
            <Link
            href={`/item/${data.id}`}
            style={{ marginTop: '10px', display: 'inline-block', textDecoration: 'underline', color: 'blue' }}
            >
                View Details
            </Link>
            <Link
            href={`/item/${data.id}/edit`}
            style={{ marginTop: '10px', marginLeft: '10px', display: 'inline-block', textDecoration: 'underline', color: 'blue' }}
            >
                Edit
            </Link>
            {/* <Spacer/> */}
            <Button
            colorScheme="red"
            onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) Inertia.delete(`/item/${data.id}`); }}
            ml={4}
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
            // bg={useColorModeValue('gray.200', 'gray.700')}
            px={5}
            py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            
            {/* <Text>88</Text> */}
        </Flex>
        <Box display="flex" flexWrap="wrap">
         
            {/* <T/ext>Dog</Text> */}
            {/* {props.pets ? (
                props.pets.map((data, i) => (
                    <Box key={i} ml={8} mr={2} mb={4} flexBasis="calc(33.33% - 250px)" boxShadow="0px 0px 2px rgba(0, 0, 0, 0.2)" border="1px solid #ccc" borderRadius="xl" bg={useColorModeValue('gray.200', 'gray.700')} borderColor="black" p={4}>
                        <Image
                            src={`/storage/${data.image}`}
                            alt={data.name}
                            style={{ maxWidth: '100%', height: '150px' }}
                        />
                        <Heading size="md" mb={2}>Name: {data.name}</Heading>
                        <Text mt={2}>Description: {data.description}</Text>
                        <Text>Price: {data.price}</Text>
                        <Text>Location: {data.location}</Text>
                    </Box>
                ))
            ) : (
                <Text>No pets found.</Text>
            )} */}
            {modalDelete && (
                   alert("berhasil dihapus")
                )}
        </Box>
        </Box>
        </AuthenticatedLayout>
    </ChakraProvider>
  );
};

export default Homepages;
