import React from 'react'
import {
    Alert,
    AlertTitle,
    AlertIcon,
    CloseButton
} from "@chakra-ui/react"

function CustomAlert({ alertStatus, message, hideAlert }) {
    //alertStatus List: 'error', 'success', 'warning', and 'info'.
    return (
        <Alert status={alertStatus}>
            <AlertIcon />
            <AlertTitle>{message}</AlertTitle>
            <CloseButton position="absolute" right="8px" top="8px" as='button' onClick={hideAlert} />
        </Alert>
    )
}
export default CustomAlert;
