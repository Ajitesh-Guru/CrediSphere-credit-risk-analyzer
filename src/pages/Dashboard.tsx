
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart, PieChart, TrendingUp, Users, CreditCard, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  // Redirect if not logged in
  React.useEffect(() => {
    if (!user || !user.isLoggedIn) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || !user.isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-theme-background">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white">Welcome back, {user.name || 'User'}</h1>
            <p className="text-gray-400">Here's what's happening with your credit assessment portfolio</p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-theme-dark p-6 rounded-lg shadow-md border border-theme-tertiary/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-400 text-sm font-medium">Total Applications</h3>
                <Users className="h-5 w-5 text-theme-primary" />
              </div>
              <p className="text-2xl font-bold text-white">1,248</p>
              <p className="text-sm text-green-500 flex items-center mt-2">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>12% increase</span>
              </p>
            </div>
            
            <div className="bg-theme-dark p-6 rounded-lg shadow-md border border-theme-tertiary/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-400 text-sm font-medium">Approval Rate</h3>
                <CreditCard className="h-5 w-5 text-theme-primary" />
              </div>
              <p className="text-2xl font-bold text-white">68.7%</p>
              <p className="text-sm text-green-500 flex items-center mt-2">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>3.2% increase</span>
              </p>
            </div>
            
            <div className="bg-theme-dark p-6 rounded-lg shadow-md border border-theme-tertiary/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-400 text-sm font-medium">Average Score</h3>
                <BarChart className="h-5 w-5 text-theme-primary" />
              </div>
              <p className="text-2xl font-bold text-white">724</p>
              <p className="text-sm text-green-500 flex items-center mt-2">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>5.4% increase</span>
              </p>
            </div>
            
            <div className="bg-theme-dark p-6 rounded-lg shadow-md border border-theme-tertiary/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-400 text-sm font-medium">Default Rate</h3>
                <AlertTriangle className="h-5 w-5 text-theme-primary" />
              </div>
              <p className="text-2xl font-bold text-white">2.3%</p>
              <p className="text-sm text-red-500 flex items-center mt-2">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>0.5% increase</span>
              </p>
            </div>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-theme-dark p-6 rounded-lg shadow-md border border-theme-tertiary/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">Monthly Applications</h3>
                <Button variant="outline" size="sm" className="border-theme-tertiary/50 text-gray-300 hover:text-white hover:bg-theme-tertiary/30">Export</Button>
              </div>
              <div className="h-64 flex items-center justify-center bg-theme-tertiary/20 rounded">
                <div className="text-center text-gray-400">
                  <BarChart className="h-12 w-12 mx-auto mb-2 text-theme-primary/50" />
                  <p>Bar chart will display here</p>
                  <p className="text-sm text-gray-500">Monthly application trends</p>
                </div>
              </div>
            </div>
            
            <div className="bg-theme-dark p-6 rounded-lg shadow-md border border-theme-tertiary/30">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-medium">Risk Distribution</h3>
                <Button variant="outline" size="sm" className="border-theme-tertiary/50 text-gray-300 hover:text-white hover:bg-theme-tertiary/30">Export</Button>
              </div>
              <div className="h-64 flex items-center justify-center bg-theme-tertiary/20 rounded">
                <div className="text-center text-gray-400">
                  <PieChart className="h-12 w-12 mx-auto mb-2 text-theme-primary/50" />
                  <p>Pie chart will display here</p>
                  <p className="text-sm text-gray-500">Distribution of risk scores</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Applications */}
          <div className="bg-theme-dark rounded-lg shadow-md border border-theme-tertiary/30 overflow-hidden">
            <div className="px-6 py-4 border-b border-theme-tertiary/30">
              <h3 className="text-white font-medium">Recent Applications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs text-gray-400 bg-theme-tertiary/20 border-b border-theme-tertiary/30">
                    <th className="px-6 py-3 font-medium">APPLICANT</th>
                    <th className="px-6 py-3 font-medium">TYPE</th>
                    <th className="px-6 py-3 font-medium">SCORE</th>
                    <th className="px-6 py-3 font-medium">AMOUNT</th>
                    <th className="px-6 py-3 font-medium">STATUS</th>
                    <th className="px-6 py-3 font-medium">DATE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-theme-tertiary/30">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="text-sm text-gray-300">
                      <td className="px-6 py-4">John Doe</td>
                      <td className="px-6 py-4">Personal Loan</td>
                      <td className="px-6 py-4">{650 + i * 10}</td>
                      <td className="px-6 py-4">${(15000 + i * 5000).toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          i % 3 === 0 ? 'bg-yellow-900/30 text-yellow-300' :
                          i % 3 === 1 ? 'bg-green-900/30 text-green-300' :
                          'bg-red-900/30 text-red-300'
                        }`}>
                          {i % 3 === 0 ? 'Pending' :
                          i % 3 === 1 ? 'Approved' :
                          'Declined'}
                        </span>
                      </td>
                      <td className="px-6 py-4">Aug {10 + i}, 2023</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-theme-tertiary/30 text-right">
              <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-theme-tertiary/30">
                <a href="#">View All Applications</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
