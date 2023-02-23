import { Box, Button, IconButton } from '@chakra-ui/react';
import React from 'react';
import { RiAppleFill } from 'react-icons/ri';

interface Props {
  w?: string[];
}

const AppleAuth: React.FC<Props> = ({ w }) => {
  return (
    <Box justifyContent="center">
      <Button
        leftIcon={<RiAppleFill />}
        w={w ? w : [null, '100%', null]}
        display={['none', 'flex', null, null]}
      >
        Sign in with Apple
      </Button>
      <IconButton
        aria-label="Apple Sign-in"
        icon={<RiAppleFill />}
        display={['flex', 'none', null, null]}
      />
    </Box>
  );
};

export default AppleAuth;
