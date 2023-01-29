import { UserContext, UserContextType } from '@/components/context/UserProvider';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import EventsTable from './EventsTable';
import { Event } from '@/hooks/types';

interface Props {
    events: Event[] | undefined
}

const ViewEvents: React.FC<Props> = ({events}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Button onClick={onOpen}>View Events</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <EventsTable events={events}/>
        </ModalBody>
        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
            </Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
</>
  )
}

export default ViewEvents