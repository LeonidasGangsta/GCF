import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserData } from '../api/users';

export type UserDataType = {
  id: number,
  firstName: string,
  lastName: string,
};

export type UserDataContextType = {
  isLoggedIn: boolean,
  updateUserData: (data: UserDataType) => void,
  user: UserDataType,
};

export const InitialUserData: UserDataType = {
  id: 0,
  firstName: '',
  lastName: '',
}

export const UserContext = createContext<UserDataContextType>({ user: InitialUserData, isLoggedIn: false, updateUserData: () => {}});

export const UserContextProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserDataType>(InitialUserData);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    getUserData(userData.id)
      .then((data) => {
        const { id, firstname, lastname } = data;
        
        setUserData({
          id,
          firstName: firstname,
          lastName: lastname,
        });
        setIsLoggedIn(true);
      })
      .catch(() => {
        console.warn('An error ocurred getting the user data.')
      });
  }, [userData.id])

  const value: UserDataContextType = {
    user: userData,
    isLoggedIn,
    updateUserData: (newData) => {
      setUserData(newData)
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

export const useUserContext = () => useContext(UserContext)