import React from "react";
import {
  Box,
  Badge,
  Text,
  Image,
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

const DropDrag = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex mt="4">
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
          <Box d="flex" alignItems="center">
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
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
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
          <Box d="flex" alignItems="center">
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
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
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
          <Box d="flex" alignItems="center">
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
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
          <Box
            mt="20px"
            p="5"
            borderWidth="1px"
            backgroundColor="orange.100"
            borderRadius="md"
          >
            <Box fontWeight="bold">Judul asd asda asdasd asdas dasd</Box>
            <Box d="flex" mt="2%" alignItems="center">
              <Button
                borderRadius="full"
                borderWidth="1px"
                backgroundColor="grey"
                p="1"
                size="xs"
              >
                A
              </Button>

              <Badge ml="1">RESEARCH</Badge>

              <Spacer />
              <Box opacity="0.7">2 days</Box>
            </Box>
          </Box>
        </Box>
      </Flex>
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
