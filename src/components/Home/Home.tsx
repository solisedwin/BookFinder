import React from 'react'
import FormBox from './FormBox'
import { Box } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import './../../styles/Home/home.css'
import { Text } from "@chakra-ui/react"

const Home = () => {
    return (
        <Container bg='#163340' minW='full' minH='container.xl' centerContent>
            <Text as='i' color='#536895' fontWeight='extrabold' fontFamily='cursive' fontSize='5xl'>Register</Text>
            <FormBox ></FormBox>
        </Container >
    );
}

export default Home;
