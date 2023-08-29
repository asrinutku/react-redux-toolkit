import { Box, Flex } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Flex
      align="center"
      p="4"
      bg="teal.500"
      color="white"
      justifyContent={"space-between"}
    >
      <Box fontWeight="bold" fontSize="lg">
        My Website
      </Box>

      <Link to="/" ml="4">
        Products
      </Link>

      <Box fontWeight="bold" fontSize="lg" justifySelf={"end"}>
        <Link to="/cart">My Bag {cartProducts.length}</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
