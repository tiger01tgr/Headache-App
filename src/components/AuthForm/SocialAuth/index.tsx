import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import AppleAuth from './AppleAuth';
import FacebookAuth from './FacebookAuth';
import GoogleAuth from './GoogleAuth';
import TwitterAuth from './TwitterAuth';

interface Props {
  w?: string[];
}

const SocialAuth: React.FC<Props> = ({ w }) => {
  return (
    <>
      <VStack mt="2em" spacing={5} display={['none', 'flex', null, null]}>
        <GoogleAuth w={w} />
        <FacebookAuth w={w} />
        <TwitterAuth w={w} />
        <AppleAuth w={w} />
      </VStack>
      <HStack
        mt="2em"
        spacing={5}
        display={['flex', 'none', null, null]}
        justifyContent="space-around"
      >
        <GoogleAuth />
        <FacebookAuth />
        <TwitterAuth />
        <AppleAuth />
      </HStack>
    </>
  );
};

export default SocialAuth;
