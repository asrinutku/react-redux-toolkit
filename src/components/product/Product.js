/* eslint-disable react-hooks/exhaustive-deps */
import "./product.css";
import React, { useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";
import { getProducts } from "../../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: productData, status } = useSelector((state) => state.products);

  useEffect(() => {
    // dispatch action for fetchProducts
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    // dispatch action
    dispatch(add(product));
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error...</p>;
  }

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
              margin="auto"
            />

            <Box
              p="6"
              height="250px"
              overflow="scroll"
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {item.title}
              </Box>
              <Text mt="1" color="gray.600" fontSize="sm">
                {item.description}
              </Text>
            </Box>

            <Box p="6" justifyContent="flex-end" display="flex">
              <Button colorScheme="blue" mt="4" onClick={() => addToCart(item)}>
                Buy
              </Button>
            </Box>
          </Box>
        ))}
    </Flex>
  );
};

export default Product;
