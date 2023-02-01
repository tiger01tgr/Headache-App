import { doc, setDoc } from 'firebase/firestore';
import { USER_TABLE } from '../constants/database';
import { db } from '../firebase/clientApp';
import { UserData } from './types';

// Converts a document from Firebase into a UserData object
const useSetUserData = async (userData: UserData) => {
  const uploadData = {
    id: userData.id,
    activeSession: userData.activeSession || null,
    username: userData.username,
    email: userData.email,
    sessions: userData.sessions || null,
    sex: userData.sex || null
  };

  await setDoc(doc(db, USER_TABLE, userData.id), uploadData);
};

export default useSetUserData;
