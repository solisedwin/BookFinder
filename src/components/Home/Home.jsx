import React from 'react'
import Header from './Header/Header'
import Slideshow from './SlideShow/Slideshow';
import FormContainer from './Forms/FormContainer';
import {Container} from "@chakra-ui/react"
import './home.css'

const Home = () => {
    return (
        <Container bg='#f2f2f2' minW='full' minH='container.xl' >
           <Header/>
            <Slideshow/>
            <FormContainer>
            </FormContainer>
        </Container >
    );
}

export default Home;
