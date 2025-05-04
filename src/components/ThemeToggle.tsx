import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="text-yellow-400" size={24} />
      ) : (
        <Moon className="text-blue-600" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;