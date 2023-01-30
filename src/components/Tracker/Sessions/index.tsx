import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import { convertDays, convertTime } from '../../../constants/time';
import { Session } from '../../../hooks/types';

const PainChart = dynamic(import('../../Recharts/PainChart'), { ssr: false });

import ViewEvents from '@/components/Timer/Event/ViewEvents';
import formatPainGraphData from '@/functions/formatPainGraphData';

interface Props {
  session: Session;
  key: number;
}
// Displays a list of sessions
const Sessions: React.FC<Props> = (session, i) => {
  if (session.session.end == null) return <div></div>;

  const data = formatPainGraphData(session.session.pain, 5);
  return (
    <VStack bg="gray.100">
      <Accordion allowToggle={true}>
        <AccordionItem>
          <h2>
            <AccordionButton justifyContent="space-between">
              <HStack justifyContent="space-between" spacing="5" marginX="10">
                <VStack>
                  <Heading fontSize="xl">
                    {convertTime(session.session.start)}
                  </Heading>
                  <Text>{convertDays(session.session.start)}</Text>
                </VStack>
                <Heading fontSize="2xl">-</Heading>
                <VStack>
                  <Heading fontSize="xl">
                    {convertTime(session.session.end)}
                  </Heading>
                  <Text>{convertDays(session.session.end)}</Text>
                </VStack>
              </HStack>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <PainChart data={data} mt={10} />
            <ViewEvents events={session.session.events} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default Sessions;
