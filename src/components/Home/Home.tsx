import { Container, Stack } from "@chakra-ui/react"
import { useState } from 'react';
import Login from './Forms/Login';
import Register from './Forms/Register';
import bookImage from '../../assets/book.png'

import {Divider, Flex, Image, Link,  Text } from "@chakra-ui/react"
import './home.css'

const Home = () => {
    const [isRegisterForm, setisRegisterForm] = useState(true);
    let formView: JSX.Element;
    let formMessage = ""

    const changeForm = () => {
        setisRegisterForm(previousForm => !previousForm)
    }

    if (isRegisterForm) {
        formView = <Register/>;
        formMessage = "Already have an account? Login";
    } else {
        formView = <Login />;
        formMessage = "Don't have an account? Register now";
    }

    return (
        <Container bg='#f2f2f2' minW='full' minH='container.xl' >
            <Container  minW='full' >
            <Flex>
                <Image src={bookImage} alt='Book' height='4.5em' paddingTop='1.5em' paddingRight='1em'/>
            
                <Text color='#000080' as='i' fontFamily='cursive' fontSize='5xl' mt={2}>
                    Book Web Finder
                </Text>
            </Flex>
                <Divider orientation='horizontal' borderBottomColor='black' />
            </Container>
            <Stack boxShadow='dark-lg' float='right' borderRadius={25} bg='#5f94cf' mt={9}>
                {formView}
                <Link onClick={changeForm} >
                    <Text fontSize='xl' mt={3} color='azure'>
                        {formMessage}
                    </Text>
                </Link>
            </Stack>
        </Container >
    );
}

export default Home;
