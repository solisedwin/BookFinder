import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Button, Text, VStack } from "@chakra-ui/react"
import TextError from './../../../Containers/TextError'
import { DEVURL } from './../../../Constants';
import './forms.css'
import axios from 'axios';

interface ILoginForm {
    username: string,
    password: string
}

const Login = () => {
    const submitLoginForm = (loginUserForm: ILoginForm) => {
        axios
            .get(`http://${DEVURL}/login`, { data: loginUserForm })
    }

    const initialValues = {
        username: "",
        password: ""
    }

    return (
        <>
            <Text fontSize='2xl' pl={29} pt={3} >Log in</Text>

            <Formik
                initialValues={initialValues}
                onSubmit={submitLoginForm}
            >
                {
                    formik => {
                        return (
                            <Form>

                                <VStack
                                    spacing={35}
                                    align='stretch'
                                    mt={10}
                                    ml={3}
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
                                </VStack>
                                    <Button colorScheme="green" mt={5} w='full' type='submit' fontSize='larger'>Login</Button>
                            </Form>
                        )
                    }

                }
            </Formik>
        </>


    );
}

export default Login;
