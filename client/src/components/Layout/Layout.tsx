import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';
import { useUserContext } from '../../context/UserContext';

const Layout: React.FC = ({ children }) => {
  const history = useHistory();
  const { isLoggedIn } = useUserContext();

  useEffect(() => {
    if (!isLoggedIn) {
      history.replace('/login')
    }
  }, [isLoggedIn, history]);

  return (
    <div className="global-layout">
      <header className="global-layout__header">
        <Header />
      </header>

      <div className="global-layout__content">
        {children}
      </div>

      <footer className="global-layout__footer">
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;
