import {
  UserContext,
  UserContextType
} from '@/components/context/UserProvider';
import { convertTimer } from '@/constants/time';
import { Text, VStack } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

// Displays the time in a timer format
const Clock: React.FC = () => {
  const { userData } = useContext(UserContext) as UserContextType;

  const computeTime = () => {
    if (!userData?.activeSession) {
      setTimeout(() => setTime(computeTime()), 1000);
      return 0;
    }
    const now: Date = new Date();
    const counter = now.getTime() - userData.activeSession.start.getTime();
    return counter;
  };

  const [time, setTime] = useState<number>(computeTime());

  useEffect(() => {
    setTimeout(() => {
      setTime(computeTime());
    }, 1000);
  }, [time]);

  return (
    <VStack>
      <Text>{convertTimer(time)}</Text>
    </VStack>
  );
};

export default Clock;
