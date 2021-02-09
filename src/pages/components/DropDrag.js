import React, { useState, useEffect } from "react";
import {
  Box,
  Badge,
  Spacer,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";

const DropDrag = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [semuaCard, updateIsisemuaCard] = useState([]);
  const [isiCard, updateIsiCard] = useState([]);
  const [isiCard2, updateIsiCard2] = useState([]);
  const [isiCard3, updateIsiCard3] = useState([]);

  useEffect(() => {
    //data berada json berada di folder public
    axios.get("./data.json").then((res) => {
      updateIsisemuaCard(res.data);
      updateIsiCard(res.data.card);
      updateIsiCard2(res.data.card2);
      updateIsiCard3(res.data.card3);
    });
  }, []);

  //Fungsi untuk reordering hasil
  let reOrder = (list, startIndex, endIndex) => {
    let result = Array.from(list);
    let [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  //Fungsi untuk memindahkan item satu ke item yang lain
  let move = (source, destination, droppableSource, droppableDestination) => {
    let sourceClone = Array.from(source);
    let destClone = Array.from(destination);
    let [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    let result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    if (result.source.droppableId === result.destination.droppableId) {
      if (result.source.droppableId === "isiCard") {
        const items = reOrder(
          isiCard,
          result.source.index,
          result.destination.index
        );

        updateIsiCard(items);
        console.log(items);
      }
      if (result.source.droppableId === "isiCard2") {
        const items = reOrder(
          isiCard2,
          result.source.index,
          result.destination.index
        );

        updateIsiCard2(items);
      }
      if (result.source.droppableId === "isiCard3") {
        const items = reOrder(
          isiCard3,
          result.source.index,
          result.destination.index
        );

        updateIsiCard3(items);
      }
    } else {
      if (result.source.droppableId === "isiCard") {
        if (result.destination.droppableId === "isiCard2") {
          const pindah = move(
            isiCard,
            isiCard2,
            result.source,
            result.destination
          );
          updateIsiCard(pindah.isiCard);
          updateIsiCard2(pindah.isiCard2);
        }
        if (result.destination.droppableId === "isiCard3") {
          const pindah = move(
            isiCard,
            isiCard3,
            result.source,
            result.destination
          );
          updateIsiCard(pindah.isiCard);
          updateIsiCard3(pindah.isiCard3);
        }
      }
      if (result.source.droppableId === "isiCard2") {
        if (result.destination.droppableId === "isiCard") {
          const pindah = move(
            isiCard2,
            isiCard,
            result.source,
            result.destination
          );
          updateIsiCard(pindah.isiCard);
          updateIsiCard2(pindah.isiCard2);
        }
        if (result.destination.droppableId === "isiCard3") {
          const pindah = move(
            isiCard2,
            isiCard3,
            result.source,
            result.destination
          );
          updateIsiCard2(pindah.isiCard2);
          updateIsiCard3(pindah.isiCard3);
        }
      }
      if (result.source.droppableId === "isiCard3") {
        if (result.destination.droppableId === "isiCard2") {
          const pindah = move(
            isiCard3,
            isiCard2,
            result.source,
            result.destination
          );
          updateIsiCard3(pindah.isiCard3);
          updateIsiCard2(pindah.isiCard2);
        }
        if (result.destination.droppableId === "isiCard") {
          const pindah = move(
            isiCard3,
            isiCard,
            result.source,
            result.destination
          );
          updateIsiCard3(pindah.isiCard3);
          updateIsiCard(pindah.isiCard);
        }
      }
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Flex>
          <Box
            maxH="600px"
            ml="5"
            p="5"
            w="22%"
            h="auto"
            borderWidth="1px"
            backgroundColor="white"
            borderRadius="lg"
          >
            <Box d="flex" alignItems="center" mb="5">
              <Box fontSize="lg" fontWeight="bold ">
                Backlog
              </Box>
              <Spacer />
              <Button
                onClick={onOpen}
                size="sm"
                borderRadius="full"
                color="white"
                backgroundColor="teal.500"
              >
                + Add Task
              </Button>
            </Box>

            <Droppable droppableId="isiCard">
              {(provided) => (
                <>
                  <Box
                    className="isiCard"
                    overflowY="scroll"
                    maxH="500px"
                    minH="100px"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {isiCard.map(
                      ({ issue_id, title, assignee, tags }, index) => {
                        return (
                          <Draggable
                            key={issue_id}
                            draggableId={issue_id}
                            index={index}
                          >
                            {(provided) => (
                              <Box
                                mt="20px"
                                p="5"
                                borderWidth="1px"
                                backgroundColor="orange.100"
                                borderRadius="md"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Box fontWeight="bold">{title}</Box>
                                <Box d="flex" mt="2%" alignItems="center">
                                  <Button
                                    borderRadius="full"
                                    borderWidth="1px"
                                    backgroundColor="grey"
                                    p="1"
                                    size="xs"
                                    color="white"
                                  >
                                    {assignee.substr(0, 1)}
                                  </Button>
                                  {tags == "RESEARCH" ? (
                                    <Badge
                                      backgroundColor="yellow.200"
                                      color="yellow.600"
                                      ml="1"
                                    >
                                      RESEARCH
                                    </Badge>
                                  ) : tags == "BACKEND" ? (
                                    <Badge
                                      backgroundColor="pink.200"
                                      color="pink.600"
                                      ml="1"
                                    >
                                      BACKEND
                                    </Badge>
                                  ) : tags == "DESIGN" ? (
                                    <Badge
                                      backgroundColor="blue.200"
                                      color="blue.600"
                                      ml="1"
                                    >
                                      DESIGN
                                    </Badge>
                                  ) : null}

                                  <Spacer />
                                  <Box opacity="0.7">2 days</Box>
                                </Box>
                              </Box>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </Box>
                </>
              )}
            </Droppable>
          </Box>

          <Box
            maxH="600px"
            ml="5"
            p="5"
            w="22%"
            h="auto"
            borderWidth="1px"
            backgroundColor="white"
            borderRadius="lg"
          >
            <Box d="flex" alignItems="center" mb="5">
              <Box fontSize="lg" fontWeight="bold ">
                To Do
              </Box>
              <Spacer />
              <Button
                onClick={onOpen}
                size="sm"
                borderRadius="full"
                color="white"
                backgroundColor="teal.500"
              >
                + Add Task
              </Button>
            </Box>

            <Droppable droppableId="isiCard2">
              {(provided) => (
                <>
                  <Box
                    className="isiCard2"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    overflowY="scroll"
                    maxH="500px"
                    minH="100px"
                  >
                    {isiCard2.map(
                      ({ issue_id, title, assignee, tags }, index) => {
                        return (
                          <Draggable
                            key={issue_id}
                            draggableId={issue_id}
                            index={index}
                          >
                            {(provided) => (
                              <Box
                                mt="20px"
                                p="5"
                                borderWidth="1px"
                                backgroundColor="orange.100"
                                borderRadius="md"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Box fontWeight="bold">{title}</Box>
                                <Box d="flex" mt="2%" alignItems="center">
                                  <Button
                                    borderRadius="full"
                                    borderWidth="1px"
                                    backgroundColor="grey"
                                    p="1"
                                    size="xs"
                                    color="white"
                                  >
                                    {assignee.substr(0, 1)}
                                  </Button>

                                  {tags == "RESEARCH" ? (
                                    <Badge
                                      backgroundColor="yellow.200"
                                      color="yellow.600"
                                      ml="1"
                                    >
                                      RESEARCH
                                    </Badge>
                                  ) : tags == "BACKEND" ? (
                                    <Badge
                                      backgroundColor="pink.200"
                                      color="pink.600"
                                      ml="1"
                                    >
                                      BACKEND
                                    </Badge>
                                  ) : tags == "DESIGN" ? (
                                    <Badge
                                      backgroundColor="blue.200"
                                      color="blue.600"
                                      ml="1"
                                    >
                                      DESIGN
                                    </Badge>
                                  ) : null}

                                  <Spacer />
                                  <Box opacity="0.7">2 days</Box>
                                </Box>
                              </Box>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </Box>
                </>
              )}
            </Droppable>
          </Box>

          <Box
            maxH="600px"
            ml="5"
            p="5"
            w="22%"
            h="auto"
            borderWidth="1px"
            backgroundColor="white"
            borderRadius="lg"
          >
            <Box d="flex" alignItems="center" mb="5">
              <Box fontSize="lg" fontWeight="bold ">
                Done
              </Box>
              <Spacer />
              <Button
                onClick={onOpen}
                size="sm"
                borderRadius="full"
                color="white"
                backgroundColor="teal.500"
              >
                + Add Task
              </Button>
            </Box>

            <Droppable droppableId="isiCard3">
              {(provided) => (
                <>
                  <Box
                    className="isiCard3"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    overflowY="scroll"
                    maxH="500px"
                    minH="100px"
                  >
                    {isiCard3.map(
                      ({ issue_id, title, assignee, tags }, index) => {
                        return (
                          <Draggable
                            key={issue_id}
                            draggableId={issue_id}
                            index={index}
                          >
                            {(provided) => (
                              <Box
                                mt="20px"
                                p="5"
                                borderWidth="1px"
                                backgroundColor="orange.100"
                                borderRadius="md"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Box fontWeight="bold">{title}</Box>
                                <Box d="flex" mt="2%" alignItems="center">
                                  <Button
                                    borderRadius="full"
                                    borderWidth="1px"
                                    backgroundColor="grey"
                                    p="1"
                                    size="xs"
                                    color="white"
                                  >
                                    {assignee.substr(0, 1)}
                                  </Button>

                                  {tags == "RESEARCH" ? (
                                    <Badge
                                      backgroundColor="yellow.200"
                                      color="yellow.600"
                                      ml="1"
                                    >
                                      RESEARCH
                                    </Badge>
                                  ) : tags == "BACKEND" ? (
                                    <Badge
                                      backgroundColor="pink.200"
                                      color="pink.600"
                                      ml="1"
                                    >
                                      BACKEND
                                    </Badge>
                                  ) : tags == "DESIGN" ? (
                                    <Badge
                                      backgroundColor="blue.200"
                                      color="blue.600"
                                      ml="1"
                                    >
                                      DESIGN
                                    </Badge>
                                  ) : null}

                                  <Spacer />
                                  <Box opacity="0.7">2 days</Box>
                                </Box>
                              </Box>
                            )}
                          </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </Box>
                </>
              )}
            </Droppable>
          </Box>
        </Flex>
      </DragDropContext>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" fontWeight="black">
            New Task
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tags</FormLabel>
              <Input placeholder="Tags" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Assignee</FormLabel>
              <Input placeholder="Assignee" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Start Date</FormLabel>
              <Input placeholder="Start Date" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>End Date</FormLabel>
              <Input placeholder="End Date" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DropDrag;
