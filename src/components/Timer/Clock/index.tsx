import { convertTimer } from '@/constants/time';
import { Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface Props {
  startTime: Date | undefined;
  active: boolean;
}

// Displays the time in a timer format
const Clock: React.FC<Props> = ({ startTime, active }) => {
  const computeTime = () => {
    if (!startTime || !active) return 0;
    const now: Date = new Date();
    const counter = now.getTime() - startTime.getTime();
    return counter;
  };

  const [time, setTime] = useState<number>(computeTime());

  useEffect(() => {
    setTimeout(() => {
      setTime(computeTime());
    }, 1000);
  }, [active, time]);

  return (
    <VStack>
      <Text>{convertTimer(time)}</Text>
    </VStack>
  );
};

export default Clock;
