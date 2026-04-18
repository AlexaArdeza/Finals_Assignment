import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

/**
 * Contact Page (Module 4 Assignment)
 * Assembled using 3 modular components as per requirement.
 */
const Contact: React.FC = () => {
  return (
    <>
      <Header title="Contact Me" />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
