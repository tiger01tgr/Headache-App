import { db } from '../firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore'
import { USER_TABLE } from '../constants/database'
import { UserCredential } from 'firebase/auth'

// Returns true if the user is a new user, false if the user is an existing user, and null if the user is not logged in
const useNewAccount = async (userCred: UserCredential | undefined): Promise<boolean | null> => {
    if(!userCred) return null;

    const uid = userCred.user.uid;

    const userDoc = await getDoc(doc(db, USER_TABLE, uid));

    return userDoc.exists();
}
export default useNewAccount