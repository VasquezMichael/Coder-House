import React from 'react'
import { HStack, Flex, Spacer, Link, Text, Box, Center } from '@chakra-ui/react'
import ('https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap');
const Navbar = () => {
  return (
    <Flex bg='black' color="white">
        <Box p={1} ml={2}>
            <Text fontSize='35px' fontFamily='Pacifico, cursive' color="violet">DripCode</Text>
        </Box>
        <Spacer/>
        <Center mr={2} >
            <Link p={4}>Home</Link>
            <Link p={4}>About</Link>
            <Link p={4}>Shop</Link>
        </Center>
    </Flex>
  )
}

export {Navbar}