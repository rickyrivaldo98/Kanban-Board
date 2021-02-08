import React from "react";
import {
  Box,
  Badge,
  Text,
  Image,
  Spacer,
  Center,
  Button,
} from "@chakra-ui/react";

const MenuSidebar = () => {
  return (
    <>
      <Box textAlign="left" mt="15%">
        <Text fontSize="xl" mb="5%" fontWeight="bold">
          Menu
        </Text>
        <Text fontSize="lg" mb="5%" fontWeight="reguler" color="white">
          Home
        </Text>
        <Text fontSize="lg" mb="5%" fontWeight="reguler" color="white">
          My Tasks
        </Text>
        <Box d="flex">
          <Text fontSize="lg" fontWeight="reguler" color="white" mr="2">
            Notification
          </Text>
          <Button
            borderRadius="full"
            size="xs"
            fontSize="sm"
            fontWeight="black"
          >
            3
          </Button>
        </Box>
      </Box>
      <Box textAlign="left" mt="15%">
        <Text fontSize="xl" mb="5%" fontWeight="bold">
          Teams
        </Text>
        <Box d="flex">
          <Text fontSize="lg" mb="5%" fontWeight="semibold" color="white">
            Researchers
          </Text>
          <Spacer />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
        </Box>

        <Box d="flex">
          <Text fontSize="lg" mb="5%" fontWeight="semibold" color="white">
            FE/BE Team
          </Text>
          <Spacer />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
        </Box>
        <Box d="flex">
          <Text fontSize="lg" mb="5%" fontWeight="semibold" color="white">
            PM Team
          </Text>
          <Spacer />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            mr="2"
          />
        </Box>
        <Text
          fontSize="lg"
          mb="5%"
          fontWeight="semibold"
          color="white"
          opacity="0.5"
        >
          +Add a Team
        </Text>
      </Box>
    </>
  );
};

export default MenuSidebar;
