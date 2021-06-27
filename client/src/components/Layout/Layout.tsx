import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { UserContext } from '../../context/UserContext';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  const history = useHistory();
  const { userData } = UserContext();

  useEffect(() => {
    if (!userData.isLoggedIn) {
      history.replace('/login')
    }
    console.log(userData);
  }, [userData, history]);

  return (
    <div className="global-layout">
      <div className="global-layout__header">
        <Header />
      </div>

      <div className="global-layout__content">
        {children}
      </div>

      <div className="global-layout__footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
