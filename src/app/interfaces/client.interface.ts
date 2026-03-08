export interface ClientInfo {
  clientId: string;
  rmId: string;//mr or mrs or ms
  name: string
  age: string;
  profession: string;
  riskProfile: string;
  esgPreference: string;
  serviceModel: string;
  investmentGoals: string[];
}

export interface ClientConstraints {
  clientId: string;
  constraints: string[];
}

export interface ClientPerformance {
  ytdReturn: string;
  monthlyData: MonthlyPerformance[];
}

export interface MonthlyPerformance {
  month: string;
  returnPercentage: string;
}

export interface LastTransactions {
  transactions: Transaction[];
}

export interface Transaction {
  transactionType: string;
  stockName: string;
  priceShare: string;
  currency: string;
}

