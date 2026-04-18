import React from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Home Page (Module 2 Assignment)
 * Assembled using 3 modular components as per requirement.
 */
const Home: React.FC = () => {
  return (
    <>
      <Header title="Modern Full-Stack Development" />
      <HeroSection 
        title="Hi, I'm a Senior Developer" 
        subtitle="Building the future of web applications with precision and style." 
      />
      <Footer />
    </>
  );
};

export default Home;
