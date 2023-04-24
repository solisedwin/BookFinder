import React, {useEffect, useState} from 'react'
import Login from './Login';
import Register from './Register';
import {Link, Stack, Text} from "@chakra-ui/react"
import { useHistory } from "react-router-dom";


const FormContainer = () => {
    const [isRegisterForm, setisRegisterForm] = useState(true);
    const [isSuccessfullyAuthenticated, setIsSuccessfullyAuthenticated] = useState(false);

    const history = useHistory();

    useEffect(()=> {
        if(isSuccessfullyAuthenticated){
            history.push('/Dashboard');
        }
    }, [isSuccessfullyAuthenticated])

    const handleAuthenticationSuccess = () => {
        setIsSuccessfullyAuthenticated(isAuthenticated => !isAuthenticated)
    }

    let formView;
    let formMessage = ""

    const changeForm = () => {
        setisRegisterForm(true);
    }

    if (isRegisterForm) {
        formView = <Register handleClick={handleAuthenticationSuccess}  />;
        formMessage = "Already have an account? Login";
    } else {
        formView = <Login handleClick={handleAuthenticationSuccess} />;
        formMessage = "Don't have an account?"
    }
    return (
            <Stack float='right' mt={12} mr={3} bg='white' borderRadius={20} minW='30rem' minH='20rem' >
                {formView}
                <Link onClick={changeForm} paddingLeft={3} paddingBottom={3} bg='#212121'>
                    <Text fontSize='md' mt={3} color='white' ml={100}>
                        {formMessage}
                    </Text>
                </Link>
            </Stack>
    );
}

export default FormContainer;
