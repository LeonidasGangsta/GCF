import React, { useEffect, useState } from 'react';

export type UserDataContextType = {
  isLoggedIn: boolean,
  id: number,
  firstName: string,
  lastName: string,
};

export const InitialUserData: UserDataContextType = {
  isLoggedIn: false,
  id: 0,
  firstName: '',
  lastName: '',
}

const UserContext = () => {
  const [userData, setUserData] = useState<UserDataContextType>(InitialUserData);

  useEffect(() => {
    // get userData
  }, [])
};

export default UserContext;
