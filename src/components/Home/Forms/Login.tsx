import { ErrorMessage, Formik, Form, Field } from 'formik';
import { VStack, Button } from "@chakra-ui/react"
import TextError from './../../../Containers/TextError'
import CustomAlert from './../../../Containers/CustomAlert'
import { DEVURL } from './../../../Constants';
import axios from 'axios';

interface ILoginForm {
    username: string,
    password: string
}

const Login = (props) => {
    if (props === undefined) {
        props = {};
    }

    const registeredSuccessAlert = () => {
        if (props.history.location.state.userCreated.status === 'success') {

            let { status, message } = props.history.location.state.userCreated;
            return <CustomAlert alertStatus={status} message={message} hideAlert={console.log('Clicked on exit login success alert')} />

        }
    }

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
            {registeredSuccessAlert()}

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
                                    <Button colorScheme="green" type='submit' fontSize='larger'>Login</Button>
                                </VStack>
                            </Form>
                        )
                    }

                }
            </Formik>
        </>


    );
}

export default Login;
