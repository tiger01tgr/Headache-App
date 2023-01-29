import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, VStack, Text, HStack } from '@chakra-ui/react';
import dynamic from "next/dynamic";
import React from 'react'
import { Session, Event, Pain } from '../../../hooks/types';
import { dayMap, monthMap, convertTime, convertDays} from '../../../constants/time';


const PainChart = dynamic(
    import('../../Recharts/PainChart'),
    { ssr: false }
);

import formatPainGraphData from '@/functions/formatPainGraphData';
import ViewEvents from '@/components/Timer/Event/ViewEvents';

interface Props {
    session: Session
    key: number
}

const Sessions: React.FC<Props> = (session, i) => {


    if (session.session.end == null) return (<div></div>);

    const data = formatPainGraphData(session.session.pain, 5);
    return (
        <VStack bg='gray.100'>
            <Accordion allowToggle={true}>
                <AccordionItem>
                    <h2>
                    <AccordionButton justifyContent='space-between'>
                        <HStack justifyContent='space-between' spacing='5' marginX='10'>
                            <VStack>
                                <Heading fontSize='xl'>{convertTime(session.session.start)}</Heading>
                                <Text>{convertDays(session.session.start)}</Text>
                            </VStack>
                            <Heading fontSize='2xl'>-</Heading>
                            <VStack>
                                <Heading fontSize='xl'>{convertTime(session.session.end)}</Heading>
                                <Text>{convertDays(session.session.end)}</Text>
                            </VStack>
                        </HStack>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <PainChart data={data} mt={10}/>
                        <ViewEvents events={session.session.events}/>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VStack>
    )
}

export default Sessions