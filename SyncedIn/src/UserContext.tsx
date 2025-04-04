import React, { createContext, useState, ReactNode } from 'react';

export interface UserData {
  email: string;
  fullName: string;
  interests: string[];
}

export interface UserContextProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    email: '',
    fullName: '',
    interests: [],
  });

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      {children}
    </UserContext.Provider>
  );
};