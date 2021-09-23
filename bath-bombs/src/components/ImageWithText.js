import React from 'react';
import {Box, Flex, Button, Text, Image, Heading } from '@chakra-ui/react';

const ImageWithText = ({ reverse, image, heading, text }) => {

    const reverseSection = reverse ? 'row-reverse' : 'row';

    return (
        <Box>
            <Flex flexDir={['column', reverseSection]} w="100%">
                <Image src={image} objectFit="cover" w={["100%", "50%"]}></Image>
                <Flex w={["100%", "50%"]} flexDir="column" justifyContent="center" alignItems="center" p="2rem">
                    <Heading p="1rem">
                        {heading && heading}
                    </Heading>
                    <Text p="2rem" textAlign="center">
                        {text && text}
                    </Text>
                    <Button w="10rem" backgroundColor="#FF38BD" color="white" _hover={{ opacity: "70%" }}>
                        Buy Now
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ImageWithText