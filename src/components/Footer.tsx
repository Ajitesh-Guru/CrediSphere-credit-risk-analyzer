
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">CrediSphere</h3>
            <p className="text-gray-600 text-sm">
              Advanced credit assessment platform for modern financial institutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm text-gray-600 hover:text-blue-600">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/demo" className="text-sm text-gray-600 hover:text-blue-600">Request Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-sm text-gray-600 hover:text-blue-600">Documentation</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/support" className="text-sm text-gray-600 hover:text-blue-600">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-blue-600">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} CrediSphere. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600">Terms</Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600">Privacy</Link>
            <Link to="/cookies" className="text-sm text-gray-600 hover:text-blue-600">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
