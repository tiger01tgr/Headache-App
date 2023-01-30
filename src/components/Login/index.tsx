import { Box, Button, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import GoogleSignIn from './LoginButton/GoogleSignIn';

// Displays the login page
const Login: React.FC = () => {
  return (
    <VStack justifyContent="center" height="100vh" width="100%">
      <VStack
        bg="white"
        justifyContent="space-evenly"
        borderRadius="3xl"
        padding="5%"
        spacing={10}
      >
        <VStack justifyContent="space-evenly">
          <Box boxSize="28">
            <Image
              src="/images/brain-slug-svgrepo-com.svg"
              color="teal"
              pos="relative"
            />
          </Box>
          <Heading color="teal.900" fontWeight="extrabold">
            cerebrum
          </Heading>
        </VStack>

        <VStack
          justifyContent="space-evenly"
          borderRadius="3xl"
          padding="5%"
          spacing={4}
        >
          <GoogleSignIn />
          <Button colorScheme="teal" variant="solid" width="xs">
            Register
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Login;
