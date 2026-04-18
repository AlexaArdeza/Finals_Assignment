import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h1>{title}</h1>
      {subtitle && <p style={{ opacity: 0.8 }}>{subtitle}</p>}
    </header>
  );
};

export default Header;
