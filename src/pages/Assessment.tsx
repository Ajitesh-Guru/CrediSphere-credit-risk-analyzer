
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, FileSpreadsheet, FileCheck } from 'lucide-react';
import { assessCreditRisk } from '@/utils/creditRiskModel';

const Assessment = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    risk: string;
    recommended: boolean;
  }>(null);

  // Form fields based on the ML model criteria
  const [income, setIncome] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [spendingHabits, setSpendingHabits] = useState<'Frugal' | 'Average' | 'Moderate Spending' | 'High Spending'>('Average');
  const [creditHistoryLength, setCreditHistoryLength] = useState('');

  // Redirect if not logged in
  React.useEffect(() => {
    if (!user || !user.isLoggedIn) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!income || !loanAmount || !creditHistoryLength) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const incomeNum = parseFloat(income.replace(/,/g, ''));
      const loanAmountNum = parseFloat(loanAmount.replace(/,/g, ''));
      const creditHistoryLengthNum = parseFloat(creditHistoryLength);
      
      // Use our credit risk model
      const assessmentResult = assessCreditRisk({
        personIncome: incomeNum,
        loanAmount: loanAmountNum,
        spendingHabits: spendingHabits,
        creditHistoryLength: creditHistoryLengthNum
      });
      
      setResult(assessmentResult);
      
      toast({
        title: 'Assessment Complete',
        description: 'Credit risk assessment has been processed successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred during the assessment.',
        variant: 'destructive',
      });
      console.error('Assessment error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIncome('');
    setLoanAmount('');
    setSpendingHabits('Average');
    setCreditHistoryLength('');
    setResult(null);
  };

  if (!user || !user.isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Credit Risk Assessment</h1>
            <p className="text-gray-600">Enter applicant details to calculate credit risk score</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Assessment Form - Updated with ML model criteria */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="income">Annual Income ($) *</Label>
                    <Input
                      id="income"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      placeholder="60,000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="loanAmount">Loan Amount ($) *</Label>
                    <Input
                      id="loanAmount"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="25,000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="spendingHabits">Spending Habits *</Label>
                    <Select 
                      onValueChange={(value: any) => setSpendingHabits(value)} 
                      defaultValue="Average"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select spending habits" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Frugal">Frugal</SelectItem>
                        <SelectItem value="Average">Average</SelectItem>
                        <SelectItem value="Moderate Spending">Moderate Spending</SelectItem>
                        <SelectItem value="High Spending">High Spending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="creditHistoryLength">Credit History Length (years) *</Label>
                    <Input
                      id="creditHistoryLength"
                      value={creditHistoryLength}
                      onChange={(e) => setCreditHistoryLength(e.target.value)}
                      placeholder="3"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Reset
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                      {isLoading ? 'Processing...' : 'Calculate Risk Score'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Results Panel */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Assessment Results</h2>
                
                {result ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 text-blue-600 mb-4">
                        <span className="text-2xl font-bold">{result.score}</span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">Credit Score</h3>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Risk Level:</span>
                        <span className={`font-medium ${
                          result.risk === 'Low' ? 'text-green-600' :
                          result.risk === 'Moderate' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {result.risk}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Recommendation:</span>
                        <span className={`font-medium ${
                          result.recommended ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {result.recommended ? 'Approve' : 'Decline'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full flex items-center justify-center">
                        <FileSpreadsheet className="h-4 w-4 mr-2" />
                        Export Report
                      </Button>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                        <FileCheck className="h-4 w-4 mr-2" />
                        Save Assessment
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-400 mb-4">
                      <Calculator className="h-8 w-8" />
                    </div>
                    <p className="text-gray-500">
                      Complete the form and submit to view the risk assessment results.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessment;
