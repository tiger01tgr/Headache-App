import { Box, Button, IconButton } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import { GoogleIcon } from './Icons/GoogleIcon';

interface Props {
  w?: string[];
}

const GoogleAuth: React.FC<Props> = ({ w }) => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();

  const login = async () => {
    const success = await signInWithGoogle();
    if (success) {
      router.push('/');
    }
  };

  return (
    <Box justifyContent="center">
      <Button
        leftIcon={<GoogleIcon />}
        w={w ? w : [null, '100%', null]}
        display={['none', 'flex', null, null]}
        onClick={login}
      >
        Sign in with Google
      </Button>
      <IconButton
        aria-label="Google Sign-in"
        icon={<GoogleIcon />}
        display={['flex', 'none', null, null]}
      />
    </Box>
  );
};

export default GoogleAuth;
