import { UserData } from '@/hooks/types';
import useUserData from '@/hooks/useUserData';
import { Flex, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { UserContext, UserContextType } from '../context/UserProvider';
import Timer from '../Timer'
import Sessions from './Sessions';

const Tracker = () => {

  const { userData } = useContext(UserContext) as UserContextType;

  console.log(userData)

  return (
    <Flex>
      <VStack paddingTop='5vh'>
        {userData?.sessions.slice(0).reverse().map((session, i) => (
          <Sessions session={session} key={i}/>
        ))}
      </VStack>
    </Flex>
  )
}

export default Tracker