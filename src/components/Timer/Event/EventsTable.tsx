import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { convertDayTime } from '@/constants/time';
import { Event } from '@/hooks/types'

interface Props {
    events : Event[] | undefined
}

const EventsTable: React.FC<Props> = ({events}) => {

  return (
    <TableContainer> 
        <Table variant='striped' colorScheme='twitter' size='md'>
            <TableCaption>Event Table</TableCaption>
            <Thead>
            <Tr>
                <Th>Event</Th>
                <Th isNumeric>Time</Th>
            </Tr>
            </Thead>
            <Tbody>
            {events?.map((event, i) => (
                <Tr key={i}>
                    <Td>{event.description}</Td>
                    <Td isNumeric>{convertDayTime(event.time)}</Td>
                </Tr>
            ))}
            </Tbody>
            <Tfoot>
            <Tr>
                <Th>Event</Th>
                <Th isNumeric>Time</Th>
            </Tr>
            </Tfoot>
        </Table>
    </TableContainer>
  )
}

export default EventsTable