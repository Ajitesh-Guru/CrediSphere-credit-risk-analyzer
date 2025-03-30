
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-dark border-t border-theme-tertiary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">CrediSphere</h3>
            <p className="text-gray-400 text-sm">
              Advanced credit assessment platform for modern financial institutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm text-gray-400 hover:text-theme-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-theme-primary">Pricing</Link></li>
              <li><Link to="/demo" className="text-sm text-gray-400 hover:text-theme-primary">Request Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-sm text-gray-400 hover:text-theme-primary">Documentation</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-400 hover:text-theme-primary">Blog</Link></li>
              <li><Link to="/support" className="text-sm text-gray-400 hover:text-theme-primary">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-theme-primary">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-400 hover:text-theme-primary">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-theme-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-theme-tertiary/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} CrediSphere. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-theme-primary">Terms</Link>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-theme-primary">Privacy</Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-theme-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
