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
  id: number,
  firstName: string,
  lastName: string,
};

export const InitialUserData: UserDataType = {
  id: 0,
  firstName: '',
  lastName: '',
}

export const UserContext = () => {
  const [userData, setUserData] = useState<UserDataType>(InitialUserData);
  const UserRawContext = createContext<UserDataContextType>({ ...InitialUserData, isLoggedIn: false, updateUserData: () => {} });

  useEffect(() => {
    getUserData(userData.id)
      .then((data) => {
        const { id, firstname, lastname } = data;
        
        setUserData({
          id,
          firstName: firstname,
          lastName: lastname,
        })
      })
      .catch(() => {
        console.warn('An error ocurred getting the user data.')
      });
  }, [userData.id])

  const Provider: React.FC = ({ children }) => {
    const value: UserDataContextType = {
      ...userData,
      isLoggedIn: false,
      updateUserData: (newData) => setUserData(newData),
    };

    return <UserRawContext.Provider value={value}>{children}</UserRawContext.Provider>
  }

  return {
    userData: useContext(UserRawContext),
    UserDataProvider: Provider,
    UserDataConsumer: UserRawContext.Consumer,
  }
};