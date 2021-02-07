import React from "react";
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      <Flex width="100%" p="5">
        <Box p="2">
          <Heading size="md">Kanban Prosa</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
