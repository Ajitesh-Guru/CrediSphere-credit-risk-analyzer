
// This file simulates the machine learning model functionality in the frontend
// In a real application, this would call an API endpoint with a trained model

interface RiskAssessmentInput {
  personIncome: number;
  loanAmount: number;
  spendingHabits: 'Frugal' | 'Average' | 'Moderate Spending' | 'High Spending';
  creditHistoryLength: number;
}

interface RiskAssessmentResult {
  score: number;
  risk: 'Low' | 'Moderate' | 'Moderate-High' | 'High';
  recommended: boolean;
}

// Simple model simulation based on statistical patterns
export const assessCreditRisk = (input: RiskAssessmentInput): RiskAssessmentResult => {
  // Map spending habits to numerical values as in the Python model
  const spendingMap = {
    'Frugal': 1,
    'Average': 2,
    'Moderate Spending': 3,
    'High Spending': 4
  };
  
  const spendingScore = spendingMap[input.spendingHabits];
  
  // Calculate debt-to-income ratio (monthly)
  // Assuming 5-year loan term for simplicity if not provided
  const monthlyLoanPayment = input.loanAmount / (60); // Simplified calculation
  const monthlyIncome = input.personIncome / 12;
  const debtToIncome = monthlyLoanPayment / monthlyIncome;
  
  // Base score starts at 700 (adjusted based on credit history length)
  let baseScore = 700;
  
  // Apply adjustments based on factors similar to the Python model
  
  // Credit history length impact
  if (input.creditHistoryLength < 2) {
    baseScore -= 50;
  } else if (input.creditHistoryLength > 5) {
    baseScore += 30;
  }
  
  // Debt-to-income impact
  if (debtToIncome > 0.43) {
    baseScore -= 80;
  } else if (debtToIncome > 0.35) {
    baseScore -= 40;
  } else if (debtToIncome < 0.2) {
    baseScore += 30;
  }
  
  // Spending habits impact
  baseScore -= (spendingScore - 1) * 20;
  
  // Income level impact
  if (input.personIncome > 100000) {
    baseScore += 20;
  } else if (input.personIncome < 30000) {
    baseScore -= 30;
  }
  
  // Ensure the score is within bounds (300-850)
  const finalScore = Math.max(300, Math.min(850, baseScore));
  
  // Determine risk level based on score
  let risk: 'Low' | 'Moderate' | 'Moderate-High' | 'High' = 'High';
  if (finalScore >= 740) {
    risk = 'Low';
  } else if (finalScore >= 670) {
    risk = 'Moderate';
  } else if (finalScore >= 580) {
    risk = 'Moderate-High';
  }
  
  return {
    score: finalScore,
    risk,
    recommended: finalScore >= 620
  };
};

