import React from "react"
import {Container, Divider, Flex, Image,  Text } from "@chakra-ui/react"
import bookImage from '../../../assets/book.png'

const Header= () => {
    return (
            <Container  minW='full' >
            <Flex>
                <Image src={bookImage} alt='Book' height='4.5em' paddingTop='1.5em' paddingRight='1em'/>
            
                <Text color='#000080' as='i' fontFamily='cursive' fontSize='5xl' mt={2}>
                    Book Web Finder
                </Text>
            </Flex>
                <Divider orientation='horizontal' borderBottomColor='black' />
            </Container>
    );    
}
export default Header;
