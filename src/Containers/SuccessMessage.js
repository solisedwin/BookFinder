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
            <AlertTitle mr={2}>{props.title}</AlertTitle>
            <AlertDescription>{props.message}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
    )
}
export default SuccessMessage;
