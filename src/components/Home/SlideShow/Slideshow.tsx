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
        message: 'Save and organize your boooks for later reading',
    },
    {
        image: DataAnalysisImage,
        message:'View book analysis data to optimize your reading experience'
    }
    ]

    const changeSlideShow =  () => {
        console.log(`Current index: ${slideShowIndex}`);
        setSlideShowIndex(index => index + 1)
        if (slideShowIndex >= 2){
            setSlideShowIndex(0)
        }
    }

    useEffect(()=>{
       const slideShowTimer = setInterval(changeSlideShow, 4000)
        return () => {
            clearInterval(slideShowTimer);
        }
    }, [])   

    
    useEffect(()=>{
        if(slideShowIndex >= 2){
            setSlideShowIndex(0);
        }
     }, [slideShowIndex])   
 

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
                {   slides[slideShowIndex].message   }
            </Heading>

            <Image
            src={slides[slideShowIndex].image}
            >
            </Image>

            </Box>
            </SlideFade>
      </Container>
    )
}

export default Slideshow;
