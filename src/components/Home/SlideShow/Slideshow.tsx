import React, {useEffect, useState} from "react"
import { Box, Container, Heading, Image, Text} from "@chakra-ui/react"
import {SlideFade } from '@chakra-ui/react'

import {ReadingImage, BookShelfImage, DataAnalysisImage } from './SlideShowImages/index.js'

const Slideshow = () => {

    const [slideShowIndex, setSlideShowIndex] = useState(0)
    const slides = [
    {
        image: ReadingImage,
        message: 'Scour the internet for books that are customized to your personal interests.',
    },
    {
        image: BookShelfImage,
        message: 'Save and organize your books for later reading',
    },
    {
        image: DataAnalysisImage,
        message:'View book analysis data to optimize your reading experience'
    }
    ]

    const changeSlideShow =  () => {
        if (slideShowIndex >= 2){
            setSlideShowIndex(0)
            return
        }
        setSlideShowIndex(index => index + 1)
    }

    useEffect(()=>{
       const slideShowTimer = setInterval(changeSlideShow, 3500)
        return () => {
            clearInterval(slideShowTimer);
        }
    }, [slideShowIndex])   

    return (
      <Container  position='absolute' minW='50%'> 
            <SlideFade in={true}>
            <Box
                p='2.5rem'
                color='white'
                mt='7'
                ml='5%'
                minW={28}
                bg='teal.500'
                rounded='md'
                shadow='md'
            >  

            <Heading size='md' textAlign='center'>
                {   slides[slideShowIndex].message   }
            </Heading>


            <Image
            boxSize='40rem'
            src={slides[slideShowIndex].image}
            ml={5}
            >
            </Image>

            </Box>
            </SlideFade>
      </Container>
    )
}

export default Slideshow;
