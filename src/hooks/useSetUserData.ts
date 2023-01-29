import { UserData } from './types';
import { db } from '../firebase/clientApp';
import { doc, setDoc } from 'firebase/firestore'
import { USER_TABLE } from '../constants/database'


// Converts a document from Firebase into a UserData object
const useSetUserData = async (userData: UserData) => {

    await setDoc(doc(db, USER_TABLE, userData.id), userData)

}

export default useSetUserData