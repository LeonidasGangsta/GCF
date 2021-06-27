import React, { useEffect } from 'react';
import { getUserData } from '../../api/users';
import './Home.scss';

const Home: React.FC = () => {
  const fetchUserData = async () => {
    const userData = await getUserData(326);
    console.log(userData);
  }

  useEffect(() => {
    fetchUserData()
  }, []);

  return (
    <div>
      This is the home
    </div>
  );
};

export default Home;
