
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Button } from '@/components/ui/button';
import { BarChart2, FileText, Home, LogOut, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const { user, logout } = useUser();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-theme-dark border-b border-theme-tertiary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BarChart2 className="h-6 w-6 text-theme-primary" />
            <span className="text-xl font-bold text-white">CrediSphere</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 text-sm font-medium ${
                isActive('/') ? 'text-theme-primary' : 'text-gray-300 hover:text-theme-primary'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-1 text-sm font-medium ${
                isActive('/dashboard') ? 'text-theme-primary' : 'text-gray-300 hover:text-theme-primary'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/assessment"
              className={`flex items-center space-x-1 text-sm font-medium ${
                isActive('/assessment') ? 'text-theme-primary' : 'text-gray-300 hover:text-theme-primary'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Assessment</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user && user.isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-theme-secondary/50 flex items-center justify-center text-white">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {user.email || user.name || 'User'}
                  </span>
                </div>
                <ThemeToggle />
                <Button variant="ghost" size="sm" onClick={logout} className="text-gray-300 hover:text-white hover:bg-theme-secondary/30">
                  <LogOut className="h-4 w-4 mr-1" />
                  <span className="hidden md:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-theme-secondary/30">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild variant="default" size="sm" className="bg-theme-primary hover:bg-theme-primary/90 text-theme-dark">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
