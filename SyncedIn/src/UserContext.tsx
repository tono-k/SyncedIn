  import React, { createContext, useState, ReactNode } from 'react';

  interface JobCardProps {
    id: string
    company: string
    title: string
    location: string
    description: string
    skills: string[]
    applied?: boolean
  }
  export interface UserData {
    email: string;
    fullName: string;
    interests: string[];
    resume: string;
    AppliedJobs: JobCardProps[];
  }
  
  export interface UserContextProps {
    userData: UserData;
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
    addJobToUser: (job: JobCardProps) => void;
  }

  export const UserContext = createContext<UserContextProps | undefined>(undefined);

  export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState<UserData>({
      email: '',
      fullName: '',
      interests: [],
      resume: '',
      AppliedJobs: [],
    });

    const addJobToUser = (newJob: JobCardProps) => {
      setUserData((user) => {
        const updatedData: UserData = {
          email: user.email,
          fullName: user.fullName,
          interests: user.interests.slice(),
          resume: user.resume,
          AppliedJobs: user.AppliedJobs.concat(newJob),
        };
        return updatedData;
      });
  };

    return (
      <UserContext.Provider value={{userData, setUserData, addJobToUser }}>
        {children}
      </UserContext.Provider>
    );
  };