import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header title="404" />
      <main style={{ textAlign: 'center' }}>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Go Home</a>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
