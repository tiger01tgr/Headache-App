export interface UserData extends UserInfo {
  sessions: Session[];
  activeSession: Session | null;
}

export interface UserInfo {
  id: string;
  email: string;
  username: string;
  sex: Sex;
}

export type Sex = 'Male' | 'Female' | 'Non-binary' | 'Other';

export interface Session {
  id: string;
  start: Date;
  end: Date | null;
  events: Event[];
  pain: Pain[];
}

export interface Event {
  description: string;
  time: Date;
}

export interface Pain {
  threshold: number;
  time: Date;
  location: string;
}
