import { Box, Image, keyframes} from '@chakra-ui/react';
import { SlideFade } from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import './carousel.css'
import manyBooks from './Images/many_books.png'
import bookShelf from './Images/book_shelf.png'
import headBookShelf from './Images/head_book_shelf.png'



const Carousel = () => {

    const  [isChangingImage, setisChangingImage] = useState(true);
    const  [index, setIndex] = useState(0);
    const images = [manyBooks, bookShelf, headBookShelf];
    
    let currentImage = images[index]

    const changeImageTimer = () => {
         setInterval( ()=> {
            setisChangingImage(slideImage => !slideImage)
        }, 3000)
    }

    useEffect ( ()=> {
        changeImageTimer();
    }, [])

    useEffect( ()=> {
        if(index + 1 >= images.length ){
            setIndex(0)
        }else{
            setIndex(currentIndex => currentIndex + 1)
        }
        currentImage = images[index];
    }, [isChangingImage] )
   
    return (
       <>
        <SlideFade in={isChangingImage}>
        <Box boxSize='sm' >
          <Image src={currentImage} alt='Book' />
        </Box>
      </SlideFade>
       </>
    );
}

export default Carousel;
