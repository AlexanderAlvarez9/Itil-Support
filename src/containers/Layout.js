import React from 'react';
import '../assets/styles/containers/Layout.scss'
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout(props) {
  return (
    <div className="layout">
      <Menu />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;