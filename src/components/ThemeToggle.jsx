import React from 'react';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button 
      
      className="fixed bottom-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {darkMode ? (
        <span className="text-yellow-400">☀️</span>
      ) : (
        <span className="text-gray-700">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;