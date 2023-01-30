import { doc, setDoc } from 'firebase/firestore';
import { USER_TABLE } from '../constants/database';
import { db } from '../firebase/clientApp';
import { UserData } from './types';

// Converts a document from Firebase into a UserData object
const useSetUserData = async (userData: UserData) => {
  await setDoc(doc(db, USER_TABLE, userData.id), userData);
};

export default useSetUserData;
