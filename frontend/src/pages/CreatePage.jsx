import React, {useState} from 'react';
import {Box, Button, Container, Flex, Heading, Input, useColorModeValue, useToast, VStack} from "@chakra-ui/react";
import {useProductStore} from "../store/product.js";


const emptyProduct = {
    name: '',
    price: '',
    img: '',
}

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState(emptyProduct)
    const {createProduct} = useProductStore();
    const toast = useToast()


    const handleAddProduct = async () => {
         const {success, message} = await createProduct(newProduct);

         if (!success) {
             toast({
                 title: "Error",
                 description: message,
                 status: "error",
                 duration: 9000,
                 isClosable: true,
             })
         }

         setNewProduct(() => emptyProduct)

         toast({
             title: "Success",
             description: message,
             status: "success",
             duration: 9000,
         })
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
                        placeholder='product Image' name="img" value={newProduct.img} onChange={(e) => setNewProduct({...newProduct, img: e.target.value})}
                    />

                    <Button colorSchema="blue" onClick={handleAddProduct} w="full"> Create Product</Button>
                </VStack>

                </Box>
            </VStack>
        </Container>
    );
};

export default CreatePage;