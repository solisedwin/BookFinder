import React, {useState} from 'react'
import Login from './Login';
import Register from './Register';
import {Link, Stack, Text} from "@chakra-ui/react"


const FormContainer = () => {
    const [isRegisterForm, setisRegisterForm] = useState(true);
    let formView;
    let formMessage = ""

    const changeForm = () => {
        setisRegisterForm(previousForm => !previousForm)
    }

    if (isRegisterForm) {
        formView = <Register/>;
        formMessage = "Already have an account? Login";
    } else {
        formView = <Login />;
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
