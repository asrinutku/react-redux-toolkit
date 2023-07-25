import { Box, Flex } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
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
        <Link to="/cart">My Bag 0</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
