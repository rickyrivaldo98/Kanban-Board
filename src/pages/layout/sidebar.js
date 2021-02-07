import React from "react";
import { Box, Badge, Text, Image } from "@chakra-ui/react";

const sidebar = () => {
  return (
    <>
      <Box
        height="100vh"
        width="25%"
        bg="tomato"
        p="30px 40px"
        textAlign="center"
      >
        <Text fontSize="xl" mb="15%">
          Sidebar Menu
        </Text>
        <Box d="flex" alignItems="center">
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
          />
          <Box pl="4%">
            <Box
              color="white"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="lg"
              textTransform="uppercase"
              ml="2"
              textAlign="left"
            >
              Ricky Rivaldo
            </Box>
            <Box
              color="black"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
              textAlign="left"
            >
              Product Manager
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default sidebar;
