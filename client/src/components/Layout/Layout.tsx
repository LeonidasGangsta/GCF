import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
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
