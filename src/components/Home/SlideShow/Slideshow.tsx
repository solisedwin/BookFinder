import React from "react"
import { Button, Box, Container, Heading, Image, Text} from "@chakra-ui/react"
import {SlideFade, useDisclosure } from '@chakra-ui/react'

const Slideshow = () => {
    const { isOpen, onToggle } = useDisclosure()

    return (
      <Container  position='absolute' minW='55%'> 
            <Button onClick={onToggle}>Click Me</Button>
            <SlideFade in={isOpen}>
            <Box
                p='2.5rem'
                color='white'
                mt='7'
                ml='5%'
                minW={30}
                bg='teal.500'
                rounded='md'
                shadow='md'
            >  
            <Image 
            width='50%'
            margin={0}
            src='https://bit.ly/dan-abramov' 
            objectFit='cover'            
            alt='Dan Abramov'
            />
            <Heading size='md' mt={5}>
                Scour the internet for books that are customized to your personal interests. 
            </Heading>

            </Box>
            </SlideFade>
      </Container>
    )
}

export default Slideshow;
