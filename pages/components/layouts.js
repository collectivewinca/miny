import React from 'react';
import Footer from './Footer'; // Adjust the path as needed
import Hero from './Hero'; // Assuming Hero contains the header

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
