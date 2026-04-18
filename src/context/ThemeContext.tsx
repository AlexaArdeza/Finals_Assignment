import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Implementation Specification (Module 3) - Updated themes
type Theme = 'midnight' | 'emerald' | 'solarized' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('personal_theme');
    return (saved as Theme) || 'midnight';
  });

  useEffect(() => {
    localStorage.setItem('personal_theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* 2. Define the Ventilation System (Provider) - wraps in div with theme class */}
      <div className={`theme-${theme} min-h-screen app-wrapper`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
