import { auth, db } from '../firebase/clientApp';

import {  
    CustomParameters, 
    User,
    UserCredential
} from 'firebase/auth';

import { 
    useAuthState, useSignInWithGoogle,
} from 'react-firebase-hooks/auth';


interface ReturnType {
    auth: User | null;
    loading: boolean,
    signIn: (scopes?: string[] | undefined, customOAuthParameters?: CustomParameters | undefined) => Promise<UserCredential | undefined>;
}

const useAuth = () : ReturnType => {

    const [ signInWithGoogle ] = useSignInWithGoogle(auth);
    const [authObj, authLoading] = useAuthState(auth);
    return {
        auth: authObj || null,
        loading: authLoading,
        signIn: signInWithGoogle
    }
}
export default useAuth;