import React from 'react';
import { Formik, Form, Field } from 'formik';
//import FormikControl from './FormikControl'
import './../../../styles/Home/forms.css'
import { VStack, Button } from "@chakra-ui/react"

import * as Yup from 'yup';

interface RegisterUser {
    username: string,
    password: string,
    reEnterPassword: string
}

const Register = () => {

    const initialValues = {
        username: "",
        password: "",
        reEnterPassword: "",
    }

    const onSubmit = (formValues: RegisterUser) => {
        console.log('We submitted the registeration form ! ')
    }

    //Must have atleast 1 uppercase, 1 lowercase letter, 1 number, and 1 special character.
    const passwordRegExp = new RegExp('/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/')
    const registertionFormSchema = Yup.object({
        username: Yup.string()
            .trim()
            .min(7)
            .max(16)
            .required('Required'),
        password: Yup.string()
            .matches(passwordRegExp, 'Must have atleast 1 uppercase, 1 lowercase letter, 1 number, and 1 special character.')
            .min(7)
            .max(24)
            .required(),
        reEnterPassword: Yup.string()
            .matches(passwordRegExp, 'Must have atleast 1 uppercase, 1 lowercase letter, 1 number, and 1 special character.')
            .min(7)
            .max(24)
            .required()
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registertionFormSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                        <Form>
                            <VStack
                                spacing={35}
                                align='stretch'
                                mt={10}
                            >
                                <Field
                                    type='text'
                                    id='username'
                                    name='username'
                                    className='formik-field'
                                />

                                <Field
                                    type='password'
                                    id='password'
                                    name='password'
                                    className='formik-field'
                                />

                                <Field
                                    type='password'
                                    id='password2'
                                    name='reEnterPassword'
                                    className='formik-field'

                                />
                                <Button colorScheme="green">Register</Button>

                            </VStack>
                        </Form>
                    )
                }
            }
        </Formik >
    );
}

export default Register;
