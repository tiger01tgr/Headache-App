import { db } from '../firebase/clientApp';

import { User } from 'firebase/auth';

import { doc, getDoc, setDoc } from 'firebase/firestore';

import { USER_TABLE } from '../constants/database';
import { UserData } from './types';
import useUserData from './useUserData';

// Creates a new user in the database if the user is new
const useCreateUser = async (user: User | null): Promise<UserData | null> => {
  // If the user is not logged in, return null
  if (!user) return null;

  // uid is id in the database
  const uid = user.uid;

  // Check if the user is already in the database
  const userDoc = await getDoc(doc(db, USER_TABLE, uid));
  // If the user is already in the database, return the user data
  if (userDoc.exists()) return useUserData(userDoc.data());

  // If the user is not in the database, create a new user
  const email = user.email;
  const username = user.displayName;
  const sex = '';
  const userData = {
    email: email,
    id: uid,
    username: username,
    sex: sex
  };

  // Add the user to the database
  await setDoc(doc(db, USER_TABLE, uid), userData);
  // Return the user data
  return useUserData(await getDoc(doc(db, USER_TABLE, uid)));
};
export default useCreateUser;
