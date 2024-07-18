// components/Layout.js
import React from 'react';
import Footer from './footer'; // Ensure the path is correct
import Hero from './Hero'; // Ensure the path is correct

const Layout = ({ children }) => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}>
      <Hero />
      <div className="layout-container flex h-full grow flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
