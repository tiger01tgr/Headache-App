import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { UserContext, UserContextType } from '../context/UserProvider';

const FinishSetUp = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ askedSetUp, setAskedSetUp ] = useState(false);
    const router = useRouter();

    const { userData } = React.useContext(UserContext) as UserContextType;

    const closeSetUp = () => {
        setAskedSetUp(true);
        onClose();
    }
    
    const goToSettings = () => {
        router.push('/settings')
    }

    useEffect(() => {
        if(userData && !askedSetUp){
            if(!userData.sex){
                onOpen();
            }
        }
    })
    
    return (
        <VStack h='100vh'>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Finish setting up your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Text>Help us help you.</Text>
                <Text>Your data will never be shared with anyone else.</Text>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={goToSettings}>
                    Go to settings
                </Button>
                <Button onClick={closeSetUp}>Later</Button>
            </ModalFooter>
            </ModalContent>
            
        </Modal>
        </VStack>
    )
}

export default FinishSetUp