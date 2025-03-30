
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, FileSpreadsheet, FileCheck } from 'lucide-react';

const Assessment = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    risk: string;
    recommended: boolean;
  }>(null);

  // Form fields
  const [applicantName, setApplicantName] = useState('');
  const [income, setIncome] = useState('');
  const [creditScore, setCreditScore] = useState([650]);
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [employmentYears, setEmploymentYears] = useState('');

  // Redirect if not logged in
  React.useEffect(() => {
    if (!user || !user.isLoggedIn) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicantName || !income || !loanAmount || !loanTerm || !employmentYears) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Calculate risk score (this would be done by an API/algorithm in a real app)
      const incomeNum = parseFloat(income.replace(/,/g, ''));
      const loanAmountNum = parseFloat(loanAmount.replace(/,/g, ''));
      const employmentYearsNum = parseFloat(employmentYears);
      const loanTermNum = parseFloat(loanTerm);
      
      // Simple calculation for demo purposes
      const debtToIncome = (loanAmountNum / loanTermNum / 12) / (incomeNum / 12);
      let baseScore = creditScore[0];
      
      // Adjust score based on factors
      if (debtToIncome > 0.43) baseScore -= 50;
      if (debtToIncome < 0.2) baseScore += 30;
      if (employmentYearsNum < 2) baseScore -= 30;
      if (employmentYearsNum > 5) baseScore += 20;
      
      // Ensure score is within bounds
      const finalScore = Math.max(300, Math.min(850, baseScore));
      
      // Determine risk level
      let risk = 'High';
      if (finalScore >= 740) risk = 'Low';
      else if (finalScore >= 670) risk = 'Moderate';
      else if (finalScore >= 580) risk = 'Moderate-High';
      
      setResult({
        score: finalScore,
        risk,
        recommended: finalScore >= 620
      });
      
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
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setApplicantName('');
    setIncome('');
    setCreditScore([650]);
    setLoanAmount('');
    setLoanTerm('');
    setEmploymentYears('');
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
            {/* Assessment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="applicantName">Applicant Name *</Label>
                      <Input
                        id="applicantName"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="income">Annual Income ($) *</Label>
                      <Input
                        id="income"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        placeholder="60,000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="creditScore">Reported Credit Score</Label>
                    <div className="pt-4 pb-2">
                      <Slider
                        defaultValue={[650]}
                        min={300}
                        max={850}
                        step={1}
                        value={creditScore}
                        onValueChange={setCreditScore}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Poor (300)</span>
                      <span>Fair (580)</span>
                      <span>Good (670)</span>
                      <span>Excellent (800+)</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-lg font-medium">{creditScore[0]}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <Label htmlFor="loanTerm">Loan Term (Years) *</Label>
                      <Input
                        id="loanTerm"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                        placeholder="5"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="employmentYears">Years at Current Employment *</Label>
                    <Input
                      id="employmentYears"
                      value={employmentYears}
                      onChange={(e) => setEmploymentYears(e.target.value)}
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
