import React from "react";
import { Flex } from "@chakra-ui/react";

import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";

export default function Kanban(props) {
  return (
    <>
      <Flex>
        <Sidebar />
        <Content />
      </Flex>
    </>
  );
}
