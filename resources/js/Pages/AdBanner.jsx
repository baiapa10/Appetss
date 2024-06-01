import React, { useState, useEffect } from "react";
import { Flex, Image, Box } from "@chakra-ui/react";

const images = [
    "/storage/logo/iklan1.png",
    "/storage/logo/iklan2.png",
    "/storage/logo/iklan3.png",
];

const AdBanner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const handleBulletClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
            <Image
                src={images[currentImageIndex]}
                alt="Appets iklan"
                boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                borderRadius="45px"
                width="6002px"
                height="300px"
                objectFit="cover"
            />
            <Flex justifyContent="center" alignItems="center" mb={2}>
                {images.map((_, index) => (
                    <Box
                        key={index}
                        w="10px"
                        h="10px"
                        bg={index === currentImageIndex ? "blue.500" : "gray.500"}
                        borderRadius="50%"
                        mx={1}
                        cursor="pointer"
                        onClick={() => handleBulletClick(index)}
                        mt="10px"
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default AdBanner;
