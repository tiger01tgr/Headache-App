import { Center, Spinner, Text, VStack } from '@chakra-ui/react';
import React from 'react';

// Displays a loading screen
const Loading: React.FC = () => {
  return (
    <Center h="100vh">
      <VStack>
        <Spinner size="xl" />
        <Text>Loading...</Text>
      </VStack>
    </Center>
  );
};

export default Loading;
