import React, { useEffect } from 'react';
import { getUserEnrolments } from '../../api/users';
import { useUserContext } from '../../context/UserContext';
import './Home.scss';

const Home: React.FC = () => {
  const userData = useUserContext();

  const {
    firstName,
    lastName,
    id,
  } = userData.user;

  useEffect(() => {
    getUserEnrolments(id).then(console.log);
  }, [id]);

  return (
    <div>
      <span>
        {`Hi ${firstName} ${lastName}, this is the home page.`}
      </span>
    </div>
  );
};

export default Home;
