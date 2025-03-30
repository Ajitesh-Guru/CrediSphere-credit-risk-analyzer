
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Toggle } from '@/components/ui/toggle';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      aria-label="Toggle theme" 
      pressed={theme === 'light'} 
      onPressedChange={toggleTheme}
      className="p-2 rounded-full bg-theme-tertiary/20 hover:bg-theme-tertiary/40 focus:outline-none"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-theme-primary" />
      ) : (
        <Moon className="h-4 w-4 text-theme-secondary" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
