import { Container, Stack } from "@chakra-ui/react"
import { useState } from 'react';
import Login from './Forms/Login';
import Register from './Forms/Register';

import { Link, Text } from "@chakra-ui/react"
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
            <Container centerContent>
                <Text color='#000080' as='i' fontFamily='cursive' fontSize='5xl' mt={2}>
                    Book Web Finder
                </Text>
            </Container>
            <Stack boxShadow='dark-lg' float='right' borderRadius={25}>
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
