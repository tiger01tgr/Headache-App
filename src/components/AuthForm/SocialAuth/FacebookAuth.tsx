import { Box, Button, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FacebookIcon } from './Icons/FacebookIcon';

interface Props {
  w?: string[];
}

const FacebookAuth: React.FC<Props> = ({ w }) => {
  return (
    <Box justifyContent="center">
      <Button
        color="#4267B2"
        leftIcon={<FacebookIcon />}
        w={w ? w : [null, '100%', null]}
        display={['none', 'flex', null, null]}
      >
        Sign in with Facebook
      </Button>
      <IconButton
        color="#4267B2"
        aria-label="Facebook Sign-in"
        icon={<FacebookIcon />}
        display={['flex', 'none', null, null]}
      />
    </Box>
  );
};

export default FacebookAuth;
