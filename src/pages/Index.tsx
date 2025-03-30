
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  BarChart2, 
  CheckCircle2, 
  Shield, 
  TrendingUp, 
  Zap, 
  LineChart, 
  PieChart,
  Lock
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Smart Credit Assessment for Modern Finance
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  CrediSphere helps financial institutions make faster, more accurate credit decisions with AI-powered risk assessment.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/register">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/demo">Request Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={16/9}>
                  <div className="bg-white h-full w-full flex items-center justify-center">
                    <div className="text-center">
                      <BarChart2 className="h-24 w-24 text-blue-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900">Interactive Dashboard</h3>
                      <p className="text-gray-500">Real-time risk assessment visualization</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful Features for Better Credit Decisions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines advanced analytics with user-friendly interfaces to streamline your credit assessment process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600">
                  Leverage AI and machine learning to analyze complex financial data and identify risk patterns.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real-time Processing
                </h3>
                <p className="text-gray-600">
                  Process applications and make credit decisions in minutes instead of days or weeks.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Risk Mitigation
                </h3>
                <p className="text-gray-600">
                  Identify potential defaults before they happen with predictive risk scoring.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Customizable Reports
                </h3>
                <p className="text-gray-600">
                  Create tailored reports and dashboards to match your institution's specific needs.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Portfolio Insights
                </h3>
                <p className="text-gray-600">
                  Gain comprehensive visibility into your entire loan portfolio performance.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enterprise Security
                </h3>
                <p className="text-gray-600">
                  Bank-grade security protocols ensure your sensitive financial data is always protected.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Financial Institutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our clients have to say about how CrediSphere has transformed their credit assessment process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <span className="text-blue-600 mr-1">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "CrediSphere has reduced our loan processing time by 70% while improving the accuracy of our risk assessments. It's been a game-changer for our institution."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">Chief Risk Officer, Metropolitan Credit Union</p>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <span className="text-blue-600 mr-1">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The insights provided by CrediSphere have helped us identify lending opportunities we would have otherwise missed. Our portfolio performance has improved significantly."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-gray-500 text-sm">VP of Analytics, Pacific Financial Group</p>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <span className="text-blue-600 mr-1">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Implementation was smooth, and the return on investment was almost immediate. CrediSphere has become an essential part of our credit decision process."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Rebecca Torres</p>
                  <p className="text-gray-500 text-sm">Director of Credit, First Community Bank</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Credit Assessment Process?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join hundreds of financial institutions that are making smarter, faster credit decisions with CrediSphere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
