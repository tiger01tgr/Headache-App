import generateUUID from '@/functions/randomUUID';
import useCreateUser from '@/hooks/useCreateUser';
import useSetUserData from '@/hooks/useSetUserData';
import { createContext, useEffect, useState } from 'react';
import { Pain, Session, UserData } from '../../../hooks/types';
import useAuth from '../../../hooks/useAuth';

export interface UserContextType {
  userData: UserData | null;
  clearUserContext: () => void;
  addNewSession: (session: Session) => void;
  editSession: (session: Session) => void;
  endActiveSession: () => void;
  addPainActiveSess: (pain: Pain) => void;
  addEvent: (event: string) => void;
  //update: () => void;
}

// Create context
// The context will be used to store the user data and the functions that will be used to update the user data
// Manages State
export const UserContext = createContext<UserContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const { auth } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (!userData) useCreateUser(auth).then((data) => setUserData(data));
  });

  const clearUserContext = () => {
    setUserData(null);
  };

  const addNewSession = (): Session | null => {
    if (!userData) return null;

    if (userData.activeSession) {
      userData.activeSession.end = new Date();
      userData.sessions.push(userData.activeSession);
    }
    userData.activeSession = {
      id: generateUUID(),
      start: new Date(),
      end: null,
      pain: [],
      events: []
    };
    updateDatabase();
    return userData.activeSession;
  };

  const editSession = (session: Session) => {
    if (!userData) return;
    const id = session.id;
    for (let i = userData.sessions.length; i >= 0; i--) {
      if (id == userData.sessions[i].id) {
        userData.sessions[i] = session;
        return;
      }
    }
    updateDatabase();
  };

  const endActiveSession = () => {

    const data = userData;
    console.log(data);
    if (!data) return;
    if (!data.activeSession) return;

    data.activeSession.end = new Date();

    data.sessions.push(data.activeSession);
    data.activeSession = null;
    setUserData(data);
    setRefresh(!refresh);
    updateDatabase();
  };

  const addPainActiveSess = (pain: Pain) => {
    userData?.activeSession?.pain.push(pain);
    updateDatabase();
  };

  const addEvent = (eventDescription: string) => {
    if (!userData) return;
    if (!userData.activeSession) return;

    userData.activeSession.events.push({
      description: eventDescription,
      time: new Date()
    });
    updateDatabase();
  };

  const updateDatabase = () => {
    if (!userData) return;
    useSetUserData(userData);
  };
  return (
    <UserContext.Provider
      value={{
        userData,
        clearUserContext,
        addNewSession,
        editSession,
        endActiveSession,
        addPainActiveSess,
        addEvent
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
