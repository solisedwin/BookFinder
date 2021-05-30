import React, { useState } from 'react';
import Login from './Forms/Login';
import Register from './Forms/Register';
import { Box } from "@chakra-ui/react"


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
        <Box borderWidth='2px' boxSize='xl' mt={200}>
            {formView}
            <p onClick={changeForm}>
                {formMessage}
            </p>
        </Box>
    )

};

export default FormBox;


