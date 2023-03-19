import React, {useEffect, useState} from "react"
import { Box, Container, Heading, Image, Text} from "@chakra-ui/react"
import {SlideFade } from '@chakra-ui/react'

import {ReadingImage, BookShelfImage, DataAnalysisImage } from './SlideShowImages/index.js'

const Slideshow = () => {

    const [slideShowIndex, setSlideShowIndex] = useState(0)
    const [imageContainer, setImageContainer] = useState([
    {
        image: ReadingImage,
        message: 'Scour the internet for books that are customized to your personal interests.',
    },
    {
        image: BookShelfImage,
        message: 'Save and organize your boooks for later reading',
    },
    {
        image: DataAnalysisImage,
        message:'View book analysis data to optimize your reading experience'
    }
    ])

/*
    let slideShowMessage = message[messageIndex]

    const changeSlideShowMessage = () => {
        if(messageIndex + 1 >= 2){
            setMessageIndex(0) 
        }
        slideShowMessage = message[messageIndex]
        setMessageIndex(messageIndex => messageIndex + 1)
    }
    
    useEffect(()=>{
        setInterval(changeSlideShowMessage, 3000)
    }, [])   */
 
    return (
      <Container  position='absolute' minW='55%'> 
            <SlideFade in={true}>
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
            <Heading size='md' mt={5}>

            </Heading>

            </Box>
            </SlideFade>
      </Container>
    )
}

export default Slideshow;
