import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react"

function SuccessMessage(props) {
    return (
        <Alert status="success">
            <AlertIcon />
            <AlertDescription>{props.message}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
    )
}
export default SuccessMessage;
