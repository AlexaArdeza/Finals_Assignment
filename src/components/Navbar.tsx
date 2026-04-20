import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const themes: ('midnight' | 'emerald' | 'solarized' | 'light')[] = ['midnight', 'emerald', 'solarized', 'light'];

  return (
    <nav>
      <div className="logo">
        DevPortfolio
      </div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="theme-switcher">
        {themes.map(t => (
          <button 
            key={t}
            onClick={() => setTheme(t)}
            className={`theme-btn ${theme === t ? 'active' : ''}`}
            style={{ 
              backgroundColor: t === 'midnight' ? '#0f172a' : t === 'emerald' ? '#10b981' : t === 'solarized' ? '#fdf6e3' : '#ffffff' 
            }}
            title={t.charAt(0).toUpperCase() + t.slice(1)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
