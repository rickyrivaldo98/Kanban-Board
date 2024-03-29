import React from "react";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  Stack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Logo from "../assets/img/prosa.png";
import { BsThreeDots } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Flex width="100%" height="15%" p="0px 15px" alignItems="center">
        <Box p="2" d="flex" alignItems="center">
          <Image src={Logo} w="60px" h="auto" mr="5" />
          <Heading size="xl" color="white">
            Kanban Prosa
          </Heading>
          <Box ml="10" color="black">
            <Menu>
              <MenuButton as={Button} borderRadius="full" mt="2" size="md">
                <BsThreeDots />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <Spacer />
        <Box>
          <Stack direction="row" alignItems="center">
            <Image
              borderRadius="full"
              boxSize="30px"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
              mr="2"
            />
            <Image
              borderRadius="full"
              boxSize="30px"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
              mr="2"
            />
            <Image
              borderRadius="full"
              boxSize="30px"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
              mr="2"
            />
            <Button fontSize="xl" borderRadius="full" bg="gray.200">
              70 Member
            </Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
