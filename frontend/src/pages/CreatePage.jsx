import React, {useState} from 'react';
import {Box, Button, Container, Flex, Heading, Input, useColorModeValue, VStack} from "@chakra-ui/react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({name: "", price: "",   image: ""})


    const handleAddProduct = () => {
        console.log(newProduct);
    }

    return (
        <Container maxW={"container.sm"}>
            <VStack
                spacing={8}
            >
                <Heading as="h1" size="2xl" textAlign="center" mb={8}>
                    Create New Product
                </Heading>
                <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>

                <VStack spacing={4}>
                    <Input
                        placeholder='product Name' name="name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                        />
                    <Input
                        placeholder='product Price' name="price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                    <Input
                        placeholder='product Image' name="image" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    />

                    <Button colorSchema="blue" onClick={handleAddProduct} w="full"> Create Product</Button>
                </VStack>

                </Box>
            </VStack>
        </Container>
    );
};

export default CreatePage;