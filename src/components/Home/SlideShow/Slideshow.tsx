import React from "react"
import { Button, Box, Image, Text} from "@chakra-ui/react"
import {SlideFade, useDisclosure } from '@chakra-ui/react'

const Slideshow = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
      <>
        <Button onClick={onToggle}>Click Me</Button>
        <SlideFade in={isOpen} offsetY='20px'>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >  
          <Image 
          src='https://bit.ly/dan-abramov' 
          objectFit='cover'
          
          alt='Dan Abramov'
           />
        <Text fontSize='xl' color='white' >
            Scour the internet for books that are customized to your interests. 
        </Text>
          </Box>
        </SlideFade>
      </>
    )
}

export default Slideshow;
