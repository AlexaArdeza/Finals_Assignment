import React from 'react';

const BioContent: React.FC = () => {
  return (
    <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
      <p>
        Aspiring full-stack architect specializing in the intersection of robust backend systems and intuitive frontend experiences.
      </p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '99px' }}>React + TS</span>
        <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '99px' }}>.NET 8</span>
        <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '99px' }}>UI/UX Design</span>
      </div>
    </div>
  );
};

export default BioContent;
