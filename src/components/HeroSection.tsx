import React from 'react';

const HeroSection: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="hero-section">
      <h1>{title}</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>{subtitle}</p>
    </div>
  );
};

export default HeroSection;
