import formatPainGraphData from '@/functions/formatPainGraphData';
import generateUUID from '@/functions/randomUUID';
import { Session } from '@/hooks/types';
import { Button, Card, CardBody, CardHeader, Flex, Heading, HStack, Icon, VStack, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { useContext, useState } from 'react'
import { UserContextType, UserContext } from '../context/UserProvider';
import Clock from './Clock';
import PainSlider from './Pain';

const PainChart = dynamic(
  import('../Recharts/PainChart'),
  { ssr: false }
);

interface Props {
  active: boolean
}


const Timer: React.FC<Props> = ({active}) => {

  const { userData, addNewSession, endActiveSession, addPainActiveSess } = useContext(UserContext) as UserContextType;
  const [ stateActive, setStateActive ] = useState(userData?.activeSession ? true : false);
  const [ updateGraph, setUpdateGraph ] = useState(false);

    /// activeSession field in UserData
  const startSession = () => {
    addNewSession({
      id: generateUUID(),
      start: new Date(),
      end: null,
      events: [],
      pain: []
    })
    setStateActive(!stateActive);
  }

  const endSession = () => {
    endActiveSession();
    setStateActive(!stateActive);
  }

  const data = formatPainGraphData(userData?.activeSession?.pain, 5); 

  return (
    <Flex marginTop={5}>
        <Button colorScheme='gray' variant='solid' display={stateActive ? 'none' : 'block'} onClick={startSession}>
            Start new session
        </Button>
        <VStack display={stateActive ? 'block' : 'none'}>
          <Card w='350px' h='100%'>
            <CardHeader>
              <HStack>
                <Icon viewBox='0 0 200 200' color='red.500'>
                  <path
                    fill='currentColor'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                  />
                </Icon>
                <Heading size='md'>Ongoing</Heading>
              </HStack>
            </CardHeader>
            <Clock active={stateActive} startTime={userData?.activeSession?.start} />
            <CardBody>
              <VStack>
                <Text>Pain Logger</Text>
                  <PainSlider updateGraph={updateGraph} setUpdateGraph={setUpdateGraph} addPainActiveSess={addPainActiveSess}/>
              </VStack>
              <PainChart data={data} mt={50}/>
              <Button  marginTop={5} colorScheme='gray' variant='solid' onClick={endSession}>End session</Button>
            </CardBody>
          </Card>
        </VStack>
    </Flex>
  )
}

export default Timer