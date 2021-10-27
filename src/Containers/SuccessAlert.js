import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertDescription,
    CloseButton
} from "@chakra-ui/react"

function SuccessMessage({ message }) {
    return (
        <Alert status="success">
            <AlertIcon />
            <AlertDescription>{message}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
    )
}
export default SuccessMessage;
