import React from "react";
import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar";

import Footer from "./layout/Footer";

export default function Kanban(props) {
  return (
    <>
      <Flex>
        <Sidebar />
        <Header />
      </Flex>
      {/* <Grid
        h="100%"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem className="sidebar" rowSpan={6} colSpan={1} bg="tomato" />
        <GridItem colSpan={4}>
          <Header />
        </GridItem>
        <GridItem
          className="konten"
          colSpan={4}
          rowSpan={4}
          bg="papayawhip"
          padding="5"
        >
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
          <h1>Halo</h1>
        </GridItem>
        <GridItem colSpan={4} bg="tomato" padding="5">
          <Footer />
        </GridItem>
      </Grid> */}
    </>
  );
}
