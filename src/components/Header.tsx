
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Button } from '@/components/ui/button';
import { BarChart2, FileText, Home, LogOut, User } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useUser();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <BarChart2 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-blue-800">CrediSphere</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 text-sm font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-1 text-sm font-medium ${
                isActive('/dashboard') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/assessment"
              className={`flex items-center space-x-1 text-sm font-medium ${
                isActive('/assessment') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
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
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user.email || user.name || 'User'}
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={logout} className="text-gray-600">
                  <LogOut className="h-4 w-4 mr-1" />
                  <span className="hidden md:inline">Logout</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button asChild variant="ghost" size="sm">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
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
