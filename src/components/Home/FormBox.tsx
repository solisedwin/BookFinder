import { useState } from 'react';
import Login from './Forms/Login';
import Register from './Forms/Register';
import { Box, Link, Text } from "@chakra-ui/react"

const FormBox = () => {

    const [isRegisterForm, setisRegisterForm] = useState(true)
    let formView: JSX.Element;
    let formMessage = ""

    if (isRegisterForm) {
        formView = <Register />;
        formMessage = "Already have an account? Login";
    } else {
        formView = <Login />;
        formMessage = "Don't have an account? Register now";
    }

    const changeForm = () => {
        setisRegisterForm(previousForm => !previousForm)
    }

    return (
        <>
            <Box mt={200}>
                {formView}
                <Link onClick={changeForm} >
                    <Text fontSize='xl' mt={3} color='azure'>
                        {formMessage}
                    </Text>
                </Link>
            </Box>

        </>

    )

};

export default FormBox;


