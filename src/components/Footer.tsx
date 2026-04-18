import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Senior Dev Portfolio. Built with React & TypeScript.</p>
    </footer>
  );
};

export default Footer;
