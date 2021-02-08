import React from "react";
import { Box, Badge, Text, Image, Spacer } from "@chakra-ui/react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import DropDrag from "../components/DropDrag";
import Bg from "../assets/img/bg.png";

const Content = () => {
  return (
    <>
      <Box
        w="100%"
        h="auto"
        p="0px 30px"
        position="relative"
        backgroundImage={`url(${Bg})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Header />
        <DropDrag />
        <Footer />
      </Box>
    </>
  );
};

export default Content;
