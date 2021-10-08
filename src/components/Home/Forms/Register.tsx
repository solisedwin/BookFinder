import React from 'react';
import axios from 'axios'
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { DEVURL } from './../../../Constants';
import './../../../styles/Home/forms.css'
import { VStack, Button } from "@chakra-ui/react"
import TextError from './../../../Containers/TextError'
import SuccessAlert from './../../../Containers/SuccessAlert'
import ErrorAlert from './../../../Containers/ErrorAlert'
import { Redirect } from "react-router-dom";

import * as Yup from 'yup';

interface IRegisterUser {
    username: string,
    password: string,
    passwordConfirmation: string
}


const Register = () => {
    const initialValues = {
        username: "",
        password: "",
        passwordConfirmation: "",
    }

    const submitRegistrationForm = (registerUserForm: IRegisterUser) => {

        axios.post(`http://${DEVURL}/register`, registerUserForm)
            .then(res => {
                console.log('Response: ' + res)
                if (res.status !== 201) {
                    <ErrorAlert message={res.data} />
                }

                //User was succesfully created in the database. Redirected to login page to sign up with new username & password
                console.log('Server response after registering a new user');

                <Redirect to={{
                    pathname: '/login',
                    state: { isRegistered: true }
                }}
                />

                // <SuccessMessage message={res.message} />
            })
            .catch(error => {
                console.log("Couldn't register new user. Error: " + JSON.stringify(error))
            })
    }

    const lowercaseRegex = new RegExp('[a-z]');
    const uppercaseRegex = new RegExp('[A-Z]');
    const numericRegex = new RegExp('\\d');
    const noSpacesRegex = new RegExp('^\\S');

    const registertionFormSchema = Yup.object({
        username: Yup.string()
            .min(6, 'Minimum characters is 6')
            .max(16, 'Maximum characters is 16')
            .matches(noSpacesRegex, 'No spaces allowed !')
            .test(`test - legal - special - characters`, 'Certain special characters/spaces are not allowed. Try again!', formValue => {
                //The negation of all characters that are allowed
                const charactersNotAllowed = new RegExp('[^a-zA-Z0-9!_@]')
                return !charactersNotAllowed.test(formValue!)
            })
            .required('Required'),
        password: Yup.string()
            .matches(lowercaseRegex, 'one lowercase required!')
            .matches(uppercaseRegex, 'one uppercase required!')
            .matches(numericRegex, 'one number required!')
            .matches(noSpacesRegex, 'No spaces allowed !')
            .min(7, 'Password is too short !')
            .max(24, 'Password is too long ! ')
            .test(`test - legal - special - characters`, 'Certain special characters/spaces are not allowed. Try again!', formValue => {
                //The negation of all characters that are allowed
                const charactersNotAllowed = new RegExp('[^a-zA-Z0-9!_@]')
                return !charactersNotAllowed.test(formValue!)
            })
            .required('Required'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Password must be the same!')
            .required('Required')
    });

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={registertionFormSchema}
            onSubmit={submitRegistrationForm}
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
                                    placeholder='Username'
                                />
                                <ErrorMessage name='username' component={TextError} />

                                <Field
                                    type='password'
                                    id='password'
                                    name='password'
                                    className='formik-field'
                                    placeholder='Password'
                                />
                                <ErrorMessage name='password' component={TextError} />

                                <Field
                                    type='password'
                                    id='passwordConfirmation'
                                    name='passwordConfirmation'
                                    className='formik-field'
                                    placeholder='Re Enter Password'
                                />
                                <ErrorMessage name='passwordConfirmation' component={TextError} />

                                <Button colorScheme="green" type='submit' fontSize='larger'>Register</Button>
                            </VStack>
                        </Form>
                    )
                }
            }
        </Formik >
    );
}

export default Register;
