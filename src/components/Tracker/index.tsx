import { Flex, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext, UserContextType } from '../context/UserProvider';
import Sessions from './Sessions';

// Displays the tracker
const Tracker = () => {
  const { userData } = useContext(UserContext) as UserContextType;

  if (userData?.sessions == null) return <div></div>;

  return (
    <Flex>
      <VStack paddingTop="5vh">
        {userData?.sessions
          .slice(0)
          .reverse()
          .map((session, i) => (
            <Sessions session={session} key={i} />
          ))}
      </VStack>
    </Flex>
  );
};

export default Tracker;
