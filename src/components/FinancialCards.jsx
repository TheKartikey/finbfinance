import React from 'react';

const FinancialCards = ({ timeFrame, setTimeFrame, totalBalance, monthlyIncome, monthlyExpenses }) => {
  const savingsRatio = ((monthlyIncome - monthlyExpenses) / monthlyIncome * 100).toFixed(1);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const getTimeFrameLabel = () => {
    switch(timeFrame) {
      case 'monthly': return 'Monthly';
      case 'quarterly': return 'Quarterly';
      default: return 'Annual';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex space-x-2 mb-6">
        {['monthly', 'quarterly', 'yearly'].map((tf) => (
          <button
            key={tf}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              timeFrame === tf 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setTimeFrame(tf)}
          >
            {tf.charAt(0).toUpperCase() + tf.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">Total Balance</h3>
          <div className="text-2xl font-bold text-gray-800 dark:text-white my-1">
            {formatCurrency(totalBalance)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            +2.5% from last {timeFrame}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">{getTimeFrameLabel()} Income</h3>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 my-1">
            {formatCurrency(monthlyIncome)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            +5.2% from last {timeFrame}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">{getTimeFrameLabel()} Expenses</h3>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400 my-1">
            {formatCurrency(monthlyExpenses)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            +3.8% from last {timeFrame}
          </div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">Savings Ratio</h3>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 my-1">
            {savingsRatio}%
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {savingsRatio > 20 ? 'Excellent' : savingsRatio > 10 ? 'Good' : 'Needs improvement'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCards;