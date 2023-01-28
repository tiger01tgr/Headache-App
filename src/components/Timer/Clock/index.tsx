import { VStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { convertTimer } from '@/constants/time';

interface Props {
    startTime: Date | undefined
    active: boolean
}


const Clock: React.FC<Props> = ({startTime, active}) => {

    const computeTime = () => {
        if(!startTime || !active) return 0;
        const now: Date = new Date;
        const counter = now.getTime() - startTime.getTime()
        return counter;
    }

    const [ time, setTime ] = useState<number>(computeTime());

    useEffect(() => {
        setTimeout(() => {
            setTime(computeTime())
        }, 1000);
      }, [active, time]);


  return (
    <VStack>
        <Text>{convertTimer(time)}</Text>
    </VStack>
  )
}

export default Clock