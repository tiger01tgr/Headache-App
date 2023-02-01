import { DocumentData } from 'firebase/firestore';
import { UserData } from './types';

// Converts a document from Firebase into a UserData object
const useUserData = (data: DocumentData | undefined) => {
  if (data == undefined) return null;

  if (data.sessions != null) {
    // Convert the dates from firebase Timestamps to Date objects
    for (let i = 0; i < data.sessions.length; i++) {
      data.sessions[i].start = data.sessions[i].start.toDate();
      if (data.sessions[i].end != null)
        data.sessions[i].end = data.sessions[i].end.toDate();
      for (let j = 0; j < data.sessions[i].events.length; j++) {
        data.sessions[i].events[j].time =
          data.sessions[i].events[j].time.toDate();
      }
      for (let j = 0; j < data.sessions[i].pain.length; j++) {
        data.sessions[i].pain[j].time = data.sessions[i].pain[j].time.toDate();
      }
    }
  }
  // Convert the dates from firebase Timestamps to Date objects
  if (data.activeSessions != null) {
    data.activeSessions.start = data.activeSessions.start.toDate();
    if (data.activeSessions.end != null)
      data.activeSessions.end = data.activeSessions.end.toDate();
    for (let j = 0; j < data.activeSessions.events.length; j++) {
      data.sessions.events[j].time = data.sessions.events[j].time.toDate();
    }
    for (let j = 0; j < data.activeSessions.pain.length; j++) {
      data.sessions.pain[j].time = data.sessions.pain[j].time.toDate();
    }
  }

  const userData: UserData = {
    id: data.id,
    activeSession: data.activeSession,
    username: data.username,
    email: data.username,
    sessions: data.sessions,
    sex: data.sex
  };
  console.log('userData: ');
  console.log(userData);
  return userData;
};

export default useUserData;
