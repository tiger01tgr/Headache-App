import { DocumentData } from 'firebase/firestore'
import { UserData } from './types';
import { fakeData } from '../components/data/data'

const useUserData = () => {
    return fakeData;
}

export default useUserData


/*

const useUserData = (data: DocumentData) => {
    const userData: UserData = {
        id: data.id,
        username: data.username,
        email: data.username,
        sessions: [],
        sex: data.sex
    }

    return userData;
}

export default useUserData*/