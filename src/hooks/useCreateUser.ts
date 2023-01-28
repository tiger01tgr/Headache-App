import { db } from '../firebase/clientApp';

import {
    User
} from 'firebase/auth';

import { doc, setDoc, getDoc } from 'firebase/firestore'

import { USER_TABLE } from '../constants/database'
import { UserData } from './types';
import useUserData from './useUserData';

const useCreateUser = async (user: User | null): Promise<UserData | null> => {
    if(!user) return null;

    const uid = user.uid;

    const userDoc = await getDoc(doc(db, USER_TABLE, uid));

    if (userDoc.exists()) return useUserData(userDoc.data());

    const email = user.email;
    const username = user.displayName
    const sex = "";

    const userData = {
        email: email,
        id: uid,
        username: username,
        sex: sex
    };

    await setDoc(doc(db, USER_TABLE, uid), userData)

    return useUserData(await getDoc(doc(db, USER_TABLE, uid)));
}
export default useCreateUser;