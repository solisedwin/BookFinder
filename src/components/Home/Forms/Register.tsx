import React from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
//import FormikControl from './FormikControl'
import './../../../styles/Home/forms.css'
import { VStack, Button } from "@chakra-ui/react"
import TextError from './TextError'

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
        console.log('We submitted the registeration form ! ', formValues)
    }

    //Must have atleast 1 uppercase, 1 lowercase letter, 1 number, and 1 special character.
    //const passwordRegExp = new RegExp('/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/')

    const lowercaseRegex = new RegExp('(?=.*[a-z])');
    const uppercaseRegex = new RegExp('(?=.*[A-Z])');
    const numericRegex = new RegExp('(?=.*[0-9])');

    const registertionFormSchema = Yup.object({
        username: Yup.string()
            .min(6, 'Minimum characters is 6')
            .max(16, 'Maximum characters is 16')
            .trim('No trailing or leading white spaces')
            .required('Required'),
        password: Yup.string()
            .matches(lowercaseRegex, 'one lowercase required!')
            .matches(uppercaseRegex, 'one uppercase required!')
            .matches(numericRegex, 'one number required!')
            .min(7, 'Password is too short !')
            .max(24, 'Password is too long ! ')
            .trim('No trailing or leading white spaces')
            .required('Required'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must be the same!')
            .required('Required')
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

                                <Button colorScheme="green" fontSize='larger' type='submit'>Register</Button>

                            </VStack>
                        </Form>
                    )
                }
            }
        </Formik >
    );
}

export default Register;
