import { Box, Image, keyframes} from '@chakra-ui/react';
import { useState } from 'react';
import './carousel.css'

const Carousel = () => {

    return (
       <>
      <Box boxSize='9'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
    </Box>
       </>
    );
}

export default Carousel;
