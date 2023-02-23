import { Box, Divider, Heading, Image, VStack } from '@chakra-ui/react';
import LoginBox from './LoginBox';
import SocialAuth from './SocialAuth';

const AuthForm = () => {
  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      alignContent="space-around"
      spacing={'5'}
    >
      <VStack>
        <Box boxSize="28">
          <Image
            src="/images/brain-slug-svgrepo-com.svg"
            pos="relative"
            alt="Logo"
          />
        </Box>
        <Heading>cerebrum</Heading>
      </VStack>
      <Box border="1px" borderWidth="1px" borderRadius="xl" p="6" m="5em">
        <Heading fontSize={20}>Sign In</Heading>
        <LoginBox />
        <Divider />
        <SocialAuth w={['10px', '350px']} />
      </Box>
    </VStack>
  );
};

export default AuthForm;
