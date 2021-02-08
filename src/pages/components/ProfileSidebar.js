import React from "react";
import { Box, Badge, Text, Image, Spacer } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
const ProfileSidebar = () => {
  return (
    <>
      <Text fontSize="xl" mb="15%">
        Search
      </Text>
      <Box d="flex" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="20%"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
        <Box pl="4%">
          <Box
            color="white"
            fontWeight="bold"
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
            fontWeight="bold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            textAlign="left"
          >
            Product Manager
          </Box>
        </Box>
        <Spacer />
        <Box color="white">
          <BsThreeDots />
        </Box>
      </Box>
      <Box
        d="flex"
        textAlign="left"
        mt="10%"
        color="white"
        fontWeight="semibold"
      >
        <Box mr="20px">
          <Text fontSize="2xl">372</Text>
          <Text fontSize="xl">Completed Tasks</Text>
        </Box>
        <Box>
          <Text fontSize="2xl">11</Text>
          <Text fontSize="xl">Open Tasks</Text>
        </Box>
      </Box>
    </>
  );
};

export default ProfileSidebar;
