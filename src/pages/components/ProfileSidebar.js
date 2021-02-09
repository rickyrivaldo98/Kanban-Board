import React from "react";
import {
  Box,
  Badge,
  Text,
  Image,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsThreeDots } from "react-icons/bs";
const ProfileSidebar = () => {
  return (
    <>
      <InputGroup mb="15%">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="tel" placeholder="Search" />
      </InputGroup>
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
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              color="white"
              backgroundColor="teal.800"
              colorScheme="teal"
            >
              <BsThreeDots />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
              <MenuDivider />

              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
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
