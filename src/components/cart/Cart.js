import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";

const Cart = () => {
  const productCards = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (productId) => {
    console.log(productId);
    dispatch(remove(productId));
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {productCards.length > 0 &&
        productCards.map((item, index) => (
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
              <Button
                colorScheme="red"
                mt="4"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))}
    </Flex>
  );
};

export default Cart;
