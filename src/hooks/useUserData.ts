import { DocumentData } from 'firebase/firestore';
import { UserData } from '../types/types';

// Converts a document from Firebase into a UserData object
const useUserData = (data: DocumentData | undefined) => {
  if (data == undefined) return null;

  // parse the data into a valid type/interface

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
  if (data.activeSession != null) {
    data.activeSession.start = data.activeSession.start.toDate();
    if (data.activeSession.end != null)
      data.activeSession.end = data.activeSession.end.toDate();
    for (let j = 0; j < data.activeSession.events.length; j++) {
      data.activeSession.events[j].time =
        data.activeSession.events[j].time.toDate();
    }
    for (let j = 0; j < data.activeSession.pain.length; j++) {
      data.activeSession.pain[j].time =
        data.activeSession.pain[j].time.toDate();
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
  return userData;
};

export default useUserData;
