import React, { useEffect } from 'react';
import { useUserContext } from '../../context/UserContext';
import './Home.scss';

const Home: React.FC = () => {
  const userData = useUserContext()

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
      This is the home
    </div>
  );
};

export default Home;
