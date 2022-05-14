import React from 'react';
import {
  Box, Button,
  Container,
  Icon,
  Drawer, DrawerBody,
  DrawerCloseButton,
  DrawerContent, DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link as LinkComponent,
  Image, Input, useDisclosure
} from "@chakra-ui/react";

import {Link} from "wouter";

import {MdMenuBook} from 'react-icons/all'

const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="header"  h="100vh" bg="teal.700">
      <Container maxW="container.xl">
        <Flex p={6} justify="space-between">
          <Link href="/">
            <LinkComponent>
              <Image
                src="https://i0.wp.com/colorear.gratis/wp-content/uploads/2021/10/Como-dibujar-un-libro-paso-a-paso-Open-Close.png"
                alt="logo"
                boxSize={16}
              />
            </LinkComponent>
          </Link>
          <Button
            onClick={onOpen}
            colorScheme='teal'
          >
          <Icon as={MdMenuBook}></Icon>
    
          </Button>
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
