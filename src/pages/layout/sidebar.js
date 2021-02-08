import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import MenuSidebar from "../components/MenuSidebar";
import { Box, Badge, Text, Image } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <>
      <Box
        height="100vh"
        width="25%"
        bg="teal.500"
        p="30px 40px"
        textAlign="center"
      >
        <ProfileSidebar />
        <MenuSidebar />
      </Box>
    </>
  );
};

export default Sidebar;
