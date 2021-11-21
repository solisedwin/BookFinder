import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertDescription,
    CloseButton
} from "@chakra-ui/react"

function CustomAlert({ alertStatus = 'info', message = 'default message' }) {
    //Status List: 'error', 'success', 'warning', and 'info'.
    return (
        <Alert status={alertStatus}>
            <AlertIcon />
            <AlertDescription>{message}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
    )
}
export default CustomAlert;
