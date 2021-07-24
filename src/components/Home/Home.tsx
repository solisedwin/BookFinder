import React from 'react'
import FormBox from './FormBox'
import { Container } from "@chakra-ui/react"
import './../../styles/Home/home.css'
import { Text } from "@chakra-ui/react"

const Home = () => {
    return (
        <Container bg='#212b36' minW='full' minH='container.xl' centerContent>
            <Text color='#536895' fontWeight='bold' fontFamily=' URW Chancery L cursive' fontSize='5xl' mt={2}>Random text to see if it uploads in Herok</Text>
            <FormBox>  </FormBox>
        </Container >
    );
}

export default Home;
