import "./product.css";
import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []);

  console.log(productData);

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {productData.length > 0 &&
        productData.map((item, index) => (
          <Box
            key={index}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m="4"
          >
            <Box
              as="img"
              src={item.image}
              alt={item.title}
              h="200px"
              objectFit="cover"
              w="100%"
            />
            <Box p="6">
              <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {item.title}
              </Box>
              <Text mt="1" color="gray.600" fontSize="sm">
                {item.description}
              </Text>
              <Button colorScheme="blue" mt="4">
                Buy
              </Button>
            </Box>
          </Box>
        ))}
    </Flex>
  );
};

export default Product;
