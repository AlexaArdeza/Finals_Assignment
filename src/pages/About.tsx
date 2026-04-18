import React from 'react';
import Header from '../components/Header';
import BioContent from '../components/BioContent';
import Footer from '../components/Footer';

/**
 * About Page (Module 2 Assignment)
 * Assembled using 3 modular components as per requirement.
 */
const About: React.FC = () => {
  return (
    <>
      <Header title="My Journey" />
      <main>
        <BioContent />
      </main>
      <Footer />
    </>
  );
};

export default About;
