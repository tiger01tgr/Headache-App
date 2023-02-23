import formatPainGraphData from '@/functions/formatPainGraphData';
import generateUUID from '@/functions/randomUUID';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { UserContext, UserContextType } from '../context/UserProvider';
import Clock from './Clock';
import Event from './Event';
import PainSlider from './Pain';

const PainChart = dynamic(import('../Recharts/PainChart'), { ssr: false });

// Displays a timer that allows the user to start a new session, end the current session, and add pain and events to the current session
const Timer: React.FC = () => {
  const { userData, addNewSession, endActiveSession, addPainActiveSess } =
    useContext(UserContext) as UserContextType;
  const [updateGraph, setUpdateGraph] = useState(false);
  const [stateActive, setStateActive] = useState(
    userData?.activeSession !== null
  );

  useEffect(() => {
    setStateActive(userData?.activeSession !== null);
  }, [userData]);

  /// activeSession field in UserData
  const startSession = () => {
    addNewSession({
      id: generateUUID(),
      start: new Date(),
      end: null,
      events: [],
      pain: []
    });
    setStateActive(!stateActive);
  };

  const endSession = () => {
    endActiveSession();
    setStateActive(!stateActive);
  };

  const data = formatPainGraphData(userData?.activeSession?.pain, 5);

  return (
    <Flex marginTop={5}>
      <Button
        colorScheme="gray"
        variant="solid"
        display={stateActive ? 'none' : 'block'}
        onClick={startSession}
      >
        Start new session
      </Button>
      <VStack display={stateActive ? 'block' : 'none'}>
        <Card w="350px" h="100%">
          <CardHeader>
            <HStack>
              <Icon viewBox="0 0 200 200" color="red.500">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              <Heading size="md">Ongoing</Heading>
            </HStack>
          </CardHeader>
          <Clock />
          <CardBody>
            <VStack>
              <Text>Pain Logger</Text>
              <PainSlider
                updateGraph={updateGraph}
                setUpdateGraph={setUpdateGraph}
                addPainActiveSess={addPainActiveSess}
              />
            </VStack>
            <PainChart data={data} mt={50} />
            <Event />
            <Button
              marginTop={5}
              bg="red.200"
              variant="solid"
              onClick={endSession}
            >
              End session
            </Button>
          </CardBody>
        </Card>
      </VStack>
    </Flex>
  );
};

export default Timer;
