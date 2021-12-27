import { Container } from "@chakra-ui/react"
import { useState } from 'react';
import Login from './Forms/Login';
import Register from './Forms/Register';

import { Box, Link, Text } from "@chakra-ui/react"
import './../../styles/Home/home.css'

const Home = () => {
    const [isRegisterForm, setisRegisterForm] = useState(true);
    let formView: JSX.Element;
    let formMessage = ""

    const changeForm = () => {
        setisRegisterForm(previousForm => !previousForm)
    }

    if (isRegisterForm) {
        formView = <Register changeParentFormState={changeForm} />;
        formMessage = "Already have an account? Login";
    } else {
        formView = <Login />;
        formMessage = "Don't have an account? Register now";
    }

    return (
        <Container bg='#212b36' minW='full' minH='container.xl' centerContent>
            <Text color='#536895' fontWeight='bold' fontFamily=' URW Chancery L cursive' fontSize='5xl' mt={2}>
                {isRegisterForm ? 'Register' : 'Login'}
            </Text>

            <Box mt={200}>
                {formView}
                <Link onClick={changeForm} >
                    <Text fontSize='xl' mt={3} color='azure'>
                        {formMessage}
                    </Text>
                </Link>
            </Box>

        </Container >
    );
}

export default Home;
