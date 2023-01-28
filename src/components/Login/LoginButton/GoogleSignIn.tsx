import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import React from 'react'
import useNewAccount from '@/hooks/useNewAccount'


const GoogleSignIn = () => {

    const [ signInWithGoogle ] = useSignInWithGoogle(auth);
    const router = useRouter();

    const login = async () => {
        const success = await signInWithGoogle();
        if (success) {
          router.push('/');
        }
      }

    return (
        <Button
        colorScheme='teal'
        variant='solid'
        width='xs'
        onClick={login}>
            Login with Google
        </Button>
    )
}

export default GoogleSignIn