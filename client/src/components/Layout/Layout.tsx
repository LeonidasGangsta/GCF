import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="global-layout">
      <Header />
      <div className="global-layout__content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
